import {Component, Input, OnInit} from '@angular/core';
import {usersTableConfig} from "../../resources/UsersTableConfig";

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  title = 'Rentalcar';
  tableConfig = usersTableConfig
  utenti: string = "Utenti";

  constructor() { }

  ngOnInit(): void {
  }
}
