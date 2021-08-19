export class CustomTableConfig {
  headers!: MyHeaders[];
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  actions!: MyTableActionEnum[];
}

export interface MyHeaders{
  key: string;
  label: string;
}

export interface MyOrder{
  defaultColumn: string;
  orderType: boolean;
}

export interface MySearch {
  columns : string [];
}

export interface MyPagination {
  itemPerPage : number ;
  itemPerPageOptions : number [];
}

export interface MyTableActionEnum {
  customCssClass : string ;
  icon: string;
  label: string;
  action: string;
}
