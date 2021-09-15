import { Component, OnInit } from '@angular/core';
import {reservationsTableConfig} from "../../resources/ReservationsTableConfig";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  title = 'Prenotazioni';
  tableConfig = reservationsTableConfig;
  prenotazioni: string = "Prenotazioni";

  constructor() { }

  ngOnInit(): void {
  }

}
