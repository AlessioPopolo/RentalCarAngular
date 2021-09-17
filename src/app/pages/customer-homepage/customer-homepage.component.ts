import { Component, OnInit } from '@angular/core';
import {addButton} from "../../resources/AddButtonConfig";
import {reservationsTableConfig} from "../../resources/ReservationsTableConfig";

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
  prenotazioni: string = "Prenotazioni";
  destination: string = "add/prenotazione";

  constructor() { }

  ngOnInit(): void {
  }

}
