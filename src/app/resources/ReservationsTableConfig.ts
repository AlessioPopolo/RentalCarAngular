import {CustomTableConfig, MyHeaders, MyOrder, MyPagination, MySearch, MyTableActionEnum} from "./CustomTableConfig";

export const theHeaders: MyHeaders[]= [
  {key: "id", label: "id", type: "hidden"},
  {key: "utente", label: "utente", type: "text"},
  {key: "automezzo", label: "automezzo", type: "text"},
  {key: "startdate", label: "data di inizio", type: "date"},
  {key: "enddate", label: "data di fine", type: "date"},
  {key: "approved", label: "approvata", type: "checkbox"}
]

export const theOrder: MyOrder = {
  defaultColumn: 'id',
  orderType: true
};

export const theSearch: MySearch = {
  columns: [
    "utente", "automezzo", "startdate", "enddate"
  ]
}

export const userPagination: MyPagination = {
  itemPerPage: 5,
  itemPerPageOptions: [2, 5, 10, 20]
}

export const theActionEnum: MyTableActionEnum[] = [
  {customCssClass: "btn btn-primary", icon: "bi bi-pencil-square", label: "EDIT", action: "edit"},
  {customCssClass: "btn btn-danger", icon: "bi bi-x-lg", label: "DELETE", action: "delete"},
  {customCssClass: "btn btn-success", icon: "bi bi-check-square", label: "APPROVA", action: "approve"}
]

export const reservationsTableConfig : CustomTableConfig={
  headers: theHeaders,
  order: theOrder,
  search: theSearch,
  pagination: userPagination,
  actions: theActionEnum
}
