import {Component, OnInit} from '@angular/core';
import {usersTableConfig} from "../../resources/UsersTableConfig";
import {addButton} from "../../resources/AddButtonConfig";

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  title = 'Rentalcar';
  tableConfig = usersTableConfig
  addButtonConfig = addButton
  utenti: string = "Utenti";
  destination: string = "add/utente";

  constructor() { }

  ngOnInit(): void {
  }
}
