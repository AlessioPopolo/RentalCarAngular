import {Component, Input, OnInit} from '@angular/core';
import {usersTableConfig} from "../../resources/UsersTableConfig";
import {CustomTableConfig} from "../../resources/CustomTableConfig";
import {autoTableConfig} from "../../resources/AutoTableConfig";
import {UtenteService} from "../../service/utente.service";
import {AutoService} from "../../service/auto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() action!: string;
  @Input() tipologia!: string;
  tableConfig!: CustomTableConfig;
  inMemoryItems!: any;
  item!: any;
  addLink: string = "save";

  constructor(private utenteService: UtenteService, private autoService: AutoService, public router: Router) { }

  ngOnInit(): void {
    switch (this.tipologia){
      case "utente":
        this.getFormUtente();
        break;

      case "auto":
        this.getFormAuto();
        break;

      default:
        console.log("No one tipologia is matched");
    }
  }

  private getFormUtente() {
    this.tableConfig = usersTableConfig;
    this.getRuoli();
    console.log("form utente")
  }

  private getFormAuto() {
    this.tableConfig = autoTableConfig;
    this.getCategorie();
    console.log("form auto")
  }

  getRuoli(): void {
    this.utenteService.getRuoli()
      .subscribe(ruoli => {
        this.inMemoryItems = ruoli;
      });
  }
  getCategorie(): void {
    this.autoService.getCategorie()
      .subscribe(categorie => {
        this.inMemoryItems = categorie;
      });
  }

  add(f: any): void {
    console.log(f);
    switch (this.tipologia){
      case "utente":
        this.utenteService.addUtente();
        break;

      case "auto":
        this.autoService.addAuto();
        break;

      default:
        console.log("No one tipologia is matched");
    }
    this.router.navigate(["admin"]);
  }
}
