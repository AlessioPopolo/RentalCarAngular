import { Component, OnInit } from '@angular/core';
import {autoTableConfig} from "../../resources/AutoTableConfig";
import {Auto} from "../../service/in-memory-data.service";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  title = 'Parco Auto';
  tableConfig = autoTableConfig
  auto: string = "Auto";

  constructor() { }

  ngOnInit(): void {
  }

}
