import { Component, OnInit } from '@angular/core';
import {reservationsTableConfig} from "../../resources/ReservationsTableConfig";
import {PrenotazioniService} from "../../service/prenotazioni.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  title = 'Prenotazioni';
  tableConfig = reservationsTableConfig;
  inMemoryItems!: any[];
  event!: string;
  object!: string;

  constructor(private prenotazioniService: PrenotazioniService, public router: Router) { }

  ngOnInit(): void {
    this.getPrenotazioni()
  }

  getPrenotazioni(): void {
    this.prenotazioniService.getPrenotazioni()
      .subscribe(prenotazioni => {
        this.inMemoryItems = prenotazioni;
        for (let i=0; i<prenotazioni.length; i++){
          this.inMemoryItems[i].utente = prenotazioni[i].utente.nome + " " + prenotazioni[i].utente.cognome;
          this.inMemoryItems[i].automezzo = prenotazioni[i].automezzo.casacostruttrice + " " + prenotazioni[i].automezzo.modello;
          let startdate = new Date(prenotazioni[i].startdate);
          let enddate = new Date(prenotazioni[i].enddate);
          this.inMemoryItems[i].startdate = startdate.toLocaleDateString();
          this.inMemoryItems[i].enddate = enddate.toLocaleDateString();
        }
      });
  }

  takeEvent($event: string) {
    this.event = $event;
  }
  doAction($event: any) {
    let object = $event;
    switch (this.event){
      case "edit":
        this.router.navigate(["prenotazioni/edit/" + object.id + "/prenotazioni"]);
        break;

      case "delete":
        this.deleteObj(object);
        break;

      case "approve":
        this.approve(object);
    }
  }

  deleteObj(object: any): void {
    this.inMemoryItems = this.inMemoryItems.filter(h => h !== object);
    this.prenotazioniService.deletePrenotazione(object.id).subscribe();
  }

  approve(object: any): void {
    this.prenotazioniService.approvePrenotazione(object.id).subscribe(
      () => this.getPrenotazioni()
    );
  }
}
