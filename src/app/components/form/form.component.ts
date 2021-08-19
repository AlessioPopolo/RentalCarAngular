import {Component, Input, OnInit} from '@angular/core';
import {usersTableConfig} from "../../resources/UsersTableConfig";
import {CustomTableConfig} from "../../resources/CustomTableConfig";
import {autoTableConfig} from "../../resources/AutoTableConfig";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() action!: string;
  @Input() tipologia!: string;
  tableConfig!: CustomTableConfig;

  constructor() { }

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
    console.log("form utente")
  }

  private getFormAuto() {
    this.tableConfig = autoTableConfig;
    console.log("form auto")
  }
}
