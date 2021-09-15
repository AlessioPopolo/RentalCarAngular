import {CustomTableConfig, MyHeaders, MyOrder, MyPagination, MySearch, MyTableActionEnum} from "./CustomTableConfig";

export const theHeaders: MyHeaders[]= [
  {key: "id", label: "id", type: "hidden"},
  {key: "ssoId", label: "ssoId", type: "text"},
  {key: "nome", label: "nome", type: "text"},
  {key: "cognome", label: "cognome", type: "text"},
  {key: "datadinascita", label: "data di nascita", type: "date"},
  {key: "ruolo", label: "ruolo", type: "select"},
  {key: "password", label: "password", type: "password"}
]

export const theOrder: MyOrder = {
  defaultColumn: 'id',
  orderType: true
};

export const theSearch: MySearch = {
  columns: [
    "ssoId", "nome", "cognome", "datadinascita"
  ]
}

export const userPagination: MyPagination = {
  itemPerPage: 5,
  itemPerPageOptions: [2, 5, 10, 20]
}

export const theActionEnum: MyTableActionEnum[] = [
  {customCssClass: "btn btn-primary", icon: "bi bi-pencil-square", label: "EDIT", action: "edit"},
  {customCssClass: "btn btn-danger", icon: "bi bi-x-lg", label: "DELETE", action: "delete"}
]

export const usersTableConfig : CustomTableConfig={
  headers: theHeaders,
  order: theOrder,
  search: theSearch,
  pagination: userPagination,
  actions: theActionEnum
}
