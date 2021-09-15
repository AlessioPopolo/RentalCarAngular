export interface Utente {
  id?: number;
  cognome: string;
  datadinascita: Date;
  nome: string;
  ruolo: any;
  password: string;
  ssoId: string;
}

export interface Auto {
  id?: number;
  casacostruttrice: string;
  modello: string;
  targa: string;
  immatricolazione: Date;
  categoria: any;
}

export interface Prenotazione {
  id?: number;
  utente: Utente;
  automezzo: Auto;
  startdate: Date;
  enddate: Date;
  approved: boolean;
}

export interface TipologiaUtente {
  id: number;
  ruolo: string;
}

export interface TipologiaAutomezzo {
  id: number;
  categoria: string;
}
