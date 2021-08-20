export interface Utente {
  id: number;
  cognome: string;
  datadinascita: Date;
  nome: string;
  ruolo: any;
  password: string;
  sso_id: string;
}

export interface Auto {
  id: number;
  casacostruttrice: string;
  modello: string;
  targa: string;
  immatricolazione: Date;
  categoria: any;
}

export interface TipologiaUtente {
  id: number;
  ruolo: string;
}

export interface TipologiaAutomezzo {
  id: number;
  categoria: string;
}
