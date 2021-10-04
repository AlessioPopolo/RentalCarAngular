import { Component, OnInit } from '@angular/core';
import {reservationsTableConfig} from "../../resources/ReservationsTableConfig";
import {PrenotazioniService} from "../../service/prenotazioni.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  title = 'Prenotazioni';
  tableConfig = reservationsTableConfig;
  inMemoryItems!: any[];

  constructor(private prenotazioniService: PrenotazioniService) { }

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
}
