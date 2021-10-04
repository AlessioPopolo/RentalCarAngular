import { Component, OnInit } from '@angular/core';
import {autoTableConfig} from "../../resources/AutoTableConfig";
import {addButton} from "../../resources/AddButtonConfig";
import {AutoService} from "../../service/auto.service";
import {Router} from "@angular/router";

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
  event!: string;
  object!: string;

  constructor(private autoService: AutoService, public router: Router) { }

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

  takeEvent($event: string) {
    this.event = $event;
  }
  doAction($event: any) {
    let object = $event;
    switch (this.event){
      case "edit":
        this.router.navigate(["auto/edit/" + object.id + "/auto"]);
        break;

      case "delete":
        this.deleteObj(object);
        break;
    }
  }

  deleteObj(object: any): void {
    this.inMemoryItems = this.inMemoryItems.filter(h => h !== object);
    this.autoService.deleteAuto(object.id).subscribe();
  }
}
