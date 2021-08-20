import {CustomTableConfig, MyHeaders, MyOrder, MyPagination, MySearch, MyTableActionEnum} from "./CustomTableConfig";

export const theHeaders: MyHeaders[]= [
  {key: "id", label: "id", type: "hidden"},
  {key: "casacostruttrice", label: "casa costruttrice", type: "text"},
  {key: "modello", label: "modello", type: "text"},
  {key: "targa", label: "targa", type: "text"},
  {key: "immatricolazione", label: "immatricolazione", type: "date"},
  {key: "categoria", label: "categoria", type: "select"}
]

export const theOrder: MyOrder = {
  defaultColumn: 'id',
  orderType: true
};

export const theSearch: MySearch = {
  columns: []
}

export const autoPagination: MyPagination = {
  itemPerPage: 3,
  itemPerPageOptions: [2, 3, 4, 10]
}

export const theActionEnum: MyTableActionEnum[] = [
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
