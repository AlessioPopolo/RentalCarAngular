import { Component, OnInit } from '@angular/core';
import {autoTableConfig} from "../../resources/AutoTableConfig";
import {Auto} from "../../model/in-memory-data.service";
import {addButton} from "../../resources/AddButtonConfig";

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

  constructor() { }

  ngOnInit(): void {
  }

}
