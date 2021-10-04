import { Component, OnInit } from '@angular/core';
import {autoTableConfig} from "../../resources/AutoTableConfig";
import {addButton} from "../../resources/AddButtonConfig";
import {AutoService} from "../../service/auto.service";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  title = 'Parco Auto';
  tableConfig = autoTableConfig
  addButtonConfig = addButton
  destination: string = "add/auto";
  inMemoryItems!: any[];

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.getAuto();
  }

  getAuto(): void {
    this.autoService.getAuto()
      .subscribe(auto => {
        this.inMemoryItems = auto;
        for (let i=0; i<auto.length; i++){
          this.inMemoryItems[i].categoria = auto[i].categoria.categoria;
          let dataimmatricolazione = new Date(auto[i].immatricolazione);
          this.inMemoryItems[i].immatricolazione = dataimmatricolazione.toLocaleDateString();
        }
      });
  }
}
