import {CustomTableConfig, MyHeaders, MyOrder, MyPagination, MySearch, MyTableActionEnum} from "./CustomTableConfig";

export const theHeaders: MyHeaders[]= [
  {key: "id", label: "id"},
  {key: "casacostruttrice", label: "casa costruttrice"},
  {key: "modello", label: "modello"},
  {key: "targa", label: "targa"},
  {key: "immatricolazione", label: "immatricolazione"},
  {key: "categoria", label: "categoria"}
]

export const theOrder: MyOrder = {
  defaultColumn: 'id',
  orderType: true
};

export const theSearch: MySearch = {
  columns: []
}

export const autoPagination: MyPagination = {
  itemPerPage: 5,
  itemPerPageOptions: [2, 5, 10, 20]
}

export const theActionEnum: MyTableActionEnum[] = [
  {customCssClass: "btn btn-success", icon: "bi bi-plus-square", label: "ADD", action: "add"},
  {customCssClass: "btn btn-primary", icon: "bi bi-pencil-square", label: "EDIT", action: "edit"},
  {customCssClass: "btn btn-danger", icon: "bi bi-x-lg", label: "DELETE", action: "delete"}
]

export const autoTableConfig : CustomTableConfig={
  headers: theHeaders,
  order: theOrder,
  search: theSearch,
  pagination: autoPagination,
  actions: theActionEnum
}
