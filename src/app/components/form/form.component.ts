import {Component, Input, OnInit} from '@angular/core';
import {usersTableConfig} from "../../resources/UsersTableConfig";
import {CustomTableConfig} from "../../resources/CustomTableConfig";
import {autoTableConfig} from "../../resources/AutoTableConfig";
import {UtenteService} from "../../service/utente.service";
import {AutoService} from "../../service/auto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Auto, Prenotazione, Utente} from "../../model/interfaces";
import {PrenotazioniService} from "../../service/prenotazioni.service";
import {reservationsTableConfig} from "../../resources/ReservationsTableConfig";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() action!: string;
  @Input() tipologia!: string;
  tableConfig!: CustomTableConfig;
  utenti: Utente[] = [];
  auto: Auto[] = [];
  prenotazioni: Prenotazione[] = []
  inMemoryItems!: any;
  item: any;
  destination!: string;

  constructor(private utenteService: UtenteService, private autoService: AutoService, private prenotazioniService: PrenotazioniService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUtenti();
    this.getAuto();
    this.getPrenotazioni();
    switch (this.tipologia){
      case "utente":
        this.route.url.subscribe(paramsId => {
          // @ts-ignore
          this.destination = paramsId.pop().toString();
        });
        if (!isNaN(+this.destination)){
          var numberValue = Number(this.destination);
          this.utenteService.getUtente(numberValue)
            .subscribe(utente => {
              this.item = utente;
              this.item.datadinascita = this.item.datadinascita.substring(0, this.item.datadinascita.indexOf("T"));
              this.utenteService.getRuolo(this.item.ruolo.id)
                .subscribe(ruolo => {
                  this.item.ruolo = ruolo;
                })
            });
        }

        this.getFormUtente();
        break;

      case "auto":
        this.route.url.subscribe(paramsId => {
          // @ts-ignore
          this.destination = paramsId.pop().toString();
        });
        if (!isNaN(+this.destination)){
          var numberValue = Number(this.destination);
          this.autoService.getSingleAuto(numberValue)
            .subscribe(singleAuto => {
              this.item = singleAuto;
              this.item.immatricolazione = this.item.immatricolazione.substring(0, this.item.immatricolazione.indexOf("T"));
              this.autoService.getCategoria(this.item.categoria.id)
                .subscribe(categoria => {
                  this.item.categoria = categoria;
                })
            });
        }

        this.getFormAuto();
        break;

      case "prenotazioni":
        this.route.url.subscribe(paramsId => {
          // @ts-ignore
          this.destination = paramsId.pop().toString();
        });
        if (!isNaN(+this.destination)){
          var numberValue = Number(this.destination);
          this.prenotazioniService.getPrenotazione(numberValue)
            .subscribe(prenotazione => {
              this.item = prenotazione;
              this.item.startdate = this.item.startdate.substring(0, this.item.startdate.indexOf("T"));
              this.item.enddate = this.item.enddate.substring(0, this.item.enddate.indexOf("T"));
            });
        }

        this.getFormPrenotazione();
        break;

      default:
        console.log("No one tipologia is matched");
    }
  }

  private getFormUtente() {
    this.tableConfig = usersTableConfig;
    this.getRuoli();
  }

  private getFormAuto() {
    this.tableConfig = autoTableConfig;
    this.getCategorie();
  }

  private getFormPrenotazione() {
    this.tableConfig = reservationsTableConfig;
  }

  getRuoli(): void {
    this.utenteService.getRuoli()
      .subscribe(ruoli => {
        this.inMemoryItems = ruoli;
      });
  }
  getCategorie(): void {
    this.autoService.getCategorie()
      .subscribe(categorie => {
        this.inMemoryItems = categorie;
      });
  }

  add(addItem: Utente): void {
    switch (this.tipologia){
      case "utente":
        if (addItem.id){
          this.utenteService.updateUtente(addItem).subscribe(utente => {
            this.getUtenti();
          })
        }
        else {
          this.utenteService.addUtente(addItem).subscribe(addItem => {
            this.utenti.push(addItem);
          });
        }
        this.router.navigate(["admin"]);
        break;

      case "auto":
        if (addItem.id){
          this.autoService.updateAuto(addItem).subscribe(auto => {
            this.getAuto();
          })
        }
        else {
          this.autoService.addAuto(addItem).subscribe(auto => {
            this.auto.push(auto);
          });
        }
        this.router.navigate(["auto"]);
        break;

      case "prenotazioni":
        if (addItem.id){
          this.prenotazioniService.updatePrenotazione(addItem).subscribe(prenotazione => {
            this.getPrenotazioni();
          })
        }
        else {
          this.prenotazioniService.addPrenotazione(addItem).subscribe(prenotazione => {
            this.prenotazioni.push(prenotazione);
          });
        }
        this.router.navigate(["prenotazioni/all"]);
        break;

      default:
        console.log("No one tipologia is matched");
        this.router.navigate(["admin"]);
    }
  }

  private getUtenti() {
    this.utenteService.getUtenti()
      .subscribe(utenti => this.utenti = utenti);
  }

  private getAuto() {
    this.autoService.getAuto()
      .subscribe(auto => this.auto = auto);
  }

  private getPrenotazioni() {
    this.prenotazioniService.getPrenotazioni()
      .subscribe(prenotazioni => this.prenotazioni = prenotazioni);
  }
}
