import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import * as _ from "lodash";
import { faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import {CustomTableConfig} from "../../resources/CustomTableConfig";
import {Router} from "@angular/router";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() tableConfig!:CustomTableConfig;
  @Input() data!:any;
  @Output() itemEvent = new EventEmitter<string>();
  @Output() itemObject = new EventEmitter<object>();
  inMemoryItems!: any[];
  filteredList: any[] = [];
  lastSortedColumn!: string;
  orderType!: boolean;
  searchedKeyword!: string;
  active = 0;
  itemPerPage!: number;
  pages: number[] = [0];
  faSortUp = faSortAlphaUp;
  faSortDown = faSortAlphaDown;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.inMemoryItems = this.data;
    this.orderFilteredList();
  }

  ngOnChanges() {
    this.inMemoryItems = this.data;
    this.orderFilteredList();
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
    this.itemEvent.emit(action);
    this.itemObject.emit(object);
  }


}
