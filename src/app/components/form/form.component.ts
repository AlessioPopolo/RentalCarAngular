import {Component, Input, OnInit} from '@angular/core';
import {usersTableConfig} from "../../resources/UsersTableConfig";
import {CustomTableConfig} from "../../resources/CustomTableConfig";
import {autoTableConfig} from "../../resources/AutoTableConfig";
import {UtenteService} from "../../service/utente.service";
import {AutoService} from "../../service/auto.service";
import {Router} from "@angular/router";
import {Auto, Utente} from "../../model/interfaces";

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
  inMemoryItems!: any;
  item!: any;

  constructor(private utenteService: UtenteService, private autoService: AutoService, public router: Router) { }

  ngOnInit(): void {
    this.getUtenti();
    this.getAuto();
    switch (this.tipologia){
      case "utente":
        this.getFormUtente();
        break;

      case "auto":
        this.getFormAuto();
        break;

      default:
        console.log("No one tipologia is matched");
    }
  }

  private getFormUtente() {
    this.tableConfig = usersTableConfig;
    this.getRuoli();
    console.log("form utente")
  }

  private getFormAuto() {
    this.tableConfig = autoTableConfig;
    this.getCategorie();
    console.log("form auto")
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
        this.utenteService.addUtente(addItem).subscribe(utente => {
          this.utenti.push(utente);
        });
        this.router.navigate(["admin"]);
        break;

      case "auto":
        this.autoService.addAuto(addItem).subscribe(auto => {
          this.auto.push(auto);
        });
        this.router.navigate(["auto"]);
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
}
