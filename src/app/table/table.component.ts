import {Component, Input, OnInit} from '@angular/core';
import * as _ from "lodash";
import { faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import {MyTableConfig, thePagination} from "../model/MyTableConfig";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() tableConfig!:MyTableConfig;
  @Input() data:any;
  filteredList!: any[];
  lastSortedColumn!: string;
  orderType!: boolean;
  searchedKeyword!: string;
  active = 0;
  itemPerPage!: number;
  pages!: number[]

  faSortUp = faSortAlphaUp;
  faSortDown = faSortAlphaDown;

  constructor() { }

  ngOnInit(): void {
    this.filteredList = _.orderBy(this.data,[this.tableConfig.order.defaultColumn], [this.tableConfig.order.orderType]);
    this.lastSortedColumn = this.tableConfig.order.defaultColumn;
    this.orderType = true;
    if (this.itemPerPage === undefined){
      this.itemPerPage = this.tableConfig.pagination.itemPerPage;
    }
    if (this.filteredList.length<=this.itemPerPage){
      this.pages = [0]
    }
    else {
      if((this.filteredList.length%this.itemPerPage)>0){
        this.pages = Array((this.filteredList.length + (this.itemPerPage - (this.filteredList.length%this.itemPerPage))) /this.itemPerPage).fill(0).map((x, i) => i);
      }
      else {
        this.pages = Array(this.filteredList.length/this.itemPerPage).fill(0).map((x, i) => i);
      }
    }
  }

  orderBy(label: string): void {
    if (this.lastSortedColumn == label){
      this.orderType = !this.orderType;
      if(this.orderType){
        this.filteredList = _.orderBy(this.data,[label], ['asc']);
      }
      else {
        this.filteredList = _.orderBy(this.data,[label], ['desc']);
      }
    }
    else {
      this.orderType = true;
      this.filteredList = _.orderBy(this.data,[label], ['asc']);
    }
    this.lastSortedColumn = label;
  }

  get currentPage (){
    return this.active;
  }

  viewItems(itemPerPage: number) {
    this.itemPerPage = itemPerPage;
    thePagination.itemPerPage = itemPerPage;
    this.ngOnInit();
  }

  doAction(action: string, object: object){
    console.log("Action: " + action);
    console.log("Object: " + object);
  }

}
