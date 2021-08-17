import { Component } from '@angular/core';
import {myTableConfig} from "./model/MyTableConfig";
import {DATIMOCK} from "./model/MockDataTable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentalcarAngular';
  tableConfig = myTableConfig
  datasource = DATIMOCK
}
