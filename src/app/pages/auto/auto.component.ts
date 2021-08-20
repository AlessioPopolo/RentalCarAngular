import { Component, OnInit } from '@angular/core';
import {autoTableConfig} from "../../resources/AutoTableConfig";
import {addButton} from "../../resources/AddButtonConfig";
import {Auto} from "../../model/interfaces";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  title = 'Parco Auto';
  tableConfig = autoTableConfig
  addButtonConfig = addButton
  auto: string = "Auto";
  destination: string = "add/auto";

  constructor() { }

  ngOnInit(): void {
  }

}
