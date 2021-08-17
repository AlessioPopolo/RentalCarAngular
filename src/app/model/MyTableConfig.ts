export interface MyTableConfig{
  headers : MyHeaders[]
  order: MyOrder
  search : MySearch
  pagination : MyPagination
  actions : MyTableActionEnum[]
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

export const theHeaders: MyHeaders[]= [
  {key: "id", label: "id"},
  {key: "nome", label: "nome"},
  {key: "cognome", label: "cognome"}
]

export const theOrder: MyOrder = {
  defaultColumn: 'id',
  orderType: true
};

export const theSearch: MySearch = {
  columns: []
}

export const thePagination: MyPagination = {
  itemPerPage: 5,
  itemPerPageOptions: [2, 5, 10, 20]
}

export const theActionEnum: MyTableActionEnum[] = [
  {customCssClass: "btn btn-success", icon: "bi bi-plus-square", label: "ADD", action: "add"},
  {customCssClass: "btn btn-primary", icon: "bi bi-pencil-square", label: "EDIT", action: "edit"},
  {customCssClass: "btn btn-danger", icon: "bi bi-x-lg", label: "DELETE", action: "delete"}
]

export const myTableConfig : MyTableConfig={
  headers: theHeaders,
  order: theOrder,
  search: theSearch,
  pagination: thePagination,
  actions: theActionEnum
}
