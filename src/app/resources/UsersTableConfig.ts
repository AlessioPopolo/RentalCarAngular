import {CustomTableConfig, MyHeaders, MyOrder, MyPagination, MySearch, MyTableActionEnum} from "./CustomTableConfig";

export const theHeaders: MyHeaders[]= [
  {key: "id", label: "id"},
  {key: "sso_id", label: "sso_id"},
  {key: "nome", label: "nome"},
  {key: "cognome", label: "cognome"},
  {key: "datadinascita", label: "data di nascita"},
  {key: "ruolo", label: "ruolo"}
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

export const usersTableConfig : CustomTableConfig={
  headers: theHeaders,
  order: theOrder,
  search: theSearch,
  pagination: thePagination,
  actions: theActionEnum
}
