import { Component, OnInit } from '@angular/core';
import {addButton} from "../../resources/AddButtonConfig";
import {reservationsTableConfig} from "../../resources/ReservationsTableConfig";
import {PrenotazioniService} from "../../service/prenotazioni.service";

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})
export class CustomerHomepageComponent implements OnInit {

  title = 'Customer page';
  tableConfig = reservationsTableConfig
  addButtonConfig = addButton
  utente = 1; //TODO prendere l'id dell'utente loggato & creare una variabile per il ruolo
  destination: string = "add/prenotazione";
  inMemoryItems!: any[];

  constructor( private prenotazioniService: PrenotazioniService) { }

  ngOnInit(): void {
    this.getPrenotazioniByUser()
  }

  getPrenotazioniByUser() : void {
    this.prenotazioniService.getPrenotazioniByUser(this.utente)
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
