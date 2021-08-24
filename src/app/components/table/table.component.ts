import {Component, Input, OnInit} from '@angular/core';
import * as _ from "lodash";
import { faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import {UtenteService} from "../../service/utente.service";
import {CustomTableConfig} from "../../resources/CustomTableConfig";
import {AutoService} from "../../service/auto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() tableConfig!:CustomTableConfig;
  @Input() data!:string;
  dataRetrieved!: string
  inMemoryItems!: any[];
  filteredList!: any[];
  lastSortedColumn!: string;
  orderType!: boolean;
  searchedKeyword!: string;
  active = 0;
  itemPerPage!: number;
  pages!: number[]

  faSortUp = faSortAlphaUp;
  faSortDown = faSortAlphaDown;

  constructor(private utenteService: UtenteService, private autoService: AutoService, public router: Router) { }

  ngOnInit(): void {
    switch (this.data){
      case "Utenti":
        this.dataRetrieved = "utenti";
        this.getUtenti();
        break;

      case "Auto":
        this.dataRetrieved = "auto";
        this.getAuto();
        break;

      default:
        console.log("No one is matched");
    }

  }

  orderFilteredList() {
    this.filteredList = _.orderBy(this.inMemoryItems, [this.tableConfig.order.defaultColumn], [this.tableConfig.order.orderType]);
    this.lastSortedColumn = this.tableConfig.order.defaultColumn;
    this.orderType = true;
    if (this.itemPerPage === undefined) {
      this.itemPerPage = this.tableConfig.pagination.itemPerPage;
    }
    if (this.filteredList.length <= this.itemPerPage) {
      this.pages = [0]
    } else {
      if ((this.filteredList.length % this.itemPerPage) > 0) {
        this.pages = Array((this.filteredList.length + (this.itemPerPage - (this.filteredList.length % this.itemPerPage))) / this.itemPerPage).fill(0).map((x, i) => i);
      } else {
        this.pages = Array(this.filteredList.length / this.itemPerPage).fill(0).map((x, i) => i);
      }
    }
  }

  orderBy(label: string): void {
    if (this.lastSortedColumn == label){
      this.orderType = !this.orderType;
      if(this.orderType){
        this.filteredList = _.orderBy(this.inMemoryItems,[label], ['asc']);
      }
      else {
        this.filteredList = _.orderBy(this.inMemoryItems,[label], ['desc']);
      }
    }
    else {
      this.orderType = true;
      this.filteredList = _.orderBy(this.inMemoryItems,[label], ['asc']);
    }
    this.lastSortedColumn = label;
  }

  get currentPage (){
    return this.active;
  }

  viewItems(itemPerPage: number) {
    this.itemPerPage = itemPerPage;
    this.tableConfig.pagination.itemPerPage = itemPerPage;
    this.ngOnInit();
  }

  doAction(action: string, object: any){
    switch (this.dataRetrieved){
      case "utenti":
        switch (action){
          case "edit":
            this.router.navigate(["admin/edit/" + object.id + "/utente"]);
            break;

          case "delete":
            this.deleteObj(object, "utente");
            break;
        }
        break;

      case "auto":
        switch (action){
          case "edit":
            this.router.navigate(["auto/edit/" + object.id + "/auto"]);
            break;

          case "delete":
            this.deleteObj(object, "auto");
            break;
        }
        break;
    }
  }

  getUtenti(): void {
    this.utenteService.getUtenti()
      .subscribe(utenti => {
        this.inMemoryItems = utenti;
        this.orderFilteredList();
      });
  }

  getAuto(): void {
    this.autoService.getAuto()
      .subscribe(auto => {
        this.inMemoryItems = auto;
        this.orderFilteredList();
      });
  }

  deleteObj(object: any, item: string): void {
    switch (item){
      case "utente":
        this.filteredList = this.filteredList.filter(h => h !== object);
        this.utenteService.deleteUtente(object.id).subscribe();
        break;
      case "auto":
        this.filteredList = this.filteredList.filter(h => h !== object);
        this.autoService.deleteAuto(object.id).subscribe();
        break;
    }
  }

}
