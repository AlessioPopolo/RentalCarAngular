import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface Utente {
  id: number;
  cognome: string;
  datadinascita: Date;
  nome: string;
  ruolo: number;
  password: string;
  sso_id: string;
}

export interface Auto {
  id: number;
  casacostruttrice: string;
  modello: string;
  targa: string;
  immatricolazione: Date;
  categoria: number;
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const utenti = [
        {
          "id": 51,
          "cognome": "pirlone",
          "datadinascita": "1998-08-20",
          "nome": "pirlone",
          "ruolo": 2,
          "password": "$2a$10$iMSFtXvxBflorj.OqBGZIeJ8Z2QCF6lqnxvZ6sIF5N.syUaK9/cTu",
          "sso_id": "pirlone"
        },
        {
          "id": 52,
          "cognome": "gianni",
          "datadinascita": "2010-10-10",
          "nome": "gianni",
          "ruolo": 2,
          "password": "$2a$10$nZaW.LTGF/O.NRZzq7XsmOAe1oipmtdgpYF9pOJ6aDxyw8Ya7KP0u",
          "sso_id": "gianni"
        },
        {
          "id": 54,
          "cognome": "pino",
          "datadinascita": "2020-10-10",
          "nome": "pino",
          "ruolo": 2,
          "password": "$2a$10$UgtdJVQQuPLG9vs6oypIIuND6YhB39/t1hjq24..nYZlc82lZzU2K",
          "sso_id": "pollo"
        },
        {
          "id": 10,
          "cognome": "Admin",
          "datadinascita": "2021-07-19",
          "nome": "Admin",
          "ruolo": 1,
          "password": "$2y$12$nLP400tckucKZ2ZwAtYywenIJ/oHyrXiI9O3LsrUj.hrNdk5i8/VO",
          "sso_id": "admin"
        },
        {
          "id": 1,
          "cognome": "Polo",
          "datadinascita": "2010-10-10",
          "nome": "Pollo",
          "ruolo": 2,
          "password": "$2y$12$2PL7p.jNAlDTtqgcR4szEe98HC1wKTKLtiVZde70KLD2PT5w0ysLO",
          "sso_id": "polo"
        },
        {
          "id": 3,
          "cognome": "Pini",
          "datadinascita": "1995-10-10",
          "nome": "Pino",
          "ruolo": 1,
          "password": "$2y$12$nLP400tckucKZ2ZwAtYywenIJ/oHyrXiI9O3LsrUj.hrNdk5i8/VO",
          "sso_id": "pino"
        },
        {
          "id": 45,
          "cognome": "Modino",
          "datadinascita": "2006-06-06",
          "nome": "Mod",
          "ruolo": 2,
          "password": "$2y$12$2PL7p.jNAlDTtqgcR4szEe98HC1wKTKLtiVZde70KLD2PT5w0ysLO",
          "sso_id": "mod"
        },
        {
          "id": 48,
          "cognome": "Super",
          "datadinascita": "1111-11-11",
          "nome": "User",
          "ruolo": 1,
          "password": "$2y$12$nLP400tckucKZ2ZwAtYywenIJ/oHyrXiI9O3LsrUj.hrNdk5i8/VO",
          "sso_id": "user"
        },
        {
          "id": 2,
          "cognome": "Palolo",
          "datadinascita": "2002-10-10",
          "nome": "Palo",
          "ruolo": 2,
          "password": "$2y$12$2PL7p.jNAlDTtqgcR4szEe98HC1wKTKLtiVZde70KLD2PT5w0ysLO",
          "sso_id": "palo"
        },
        {
          "id": 5,
          "cognome": "Miolo",
          "datadinascita": "1910-10-10",
          "nome": "Mio",
          "ruolo": 1,
          "password": "$2y$12$nLP400tckucKZ2ZwAtYywenIJ/oHyrXiI9O3LsrUj.hrNdk5i8/VO",
          "sso_id": "mio"
        },
        {
          "id": 46,
          "cognome": "Pinino",
          "datadinascita": "2014-12-15",
          "nome": "Pinoni",
          "ruolo": 2,
          "password": "$2y$12$2PL7p.jNAlDTtqgcR4szEe98HC1wKTKLtiVZde70KLD2PT5w0ysLO",
          "sso_id": "pinoni"
        },
        {
          "id": 6,
          "cognome": "Tup",
          "datadinascita": "1912-12-10",
          "nome": "Tuo",
          "ruolo": 1,
          "password": "$2y$12$nLP400tckucKZ2ZwAtYywenIJ/oHyrXiI9O3LsrUj.hrNdk5i8/VO",
          "sso_id": "tuo"
        }
    ];
    const auto = [
      {
        "id": 4,
        "casacostruttrice": "Fiat",
        "immatricolazione": "2019-12-01 00:00:00.000000",
        "modello": "500",
        "targa": "ab126ab",
        "categoria": 1
      },
      {
        "id": 44,
        "casacostruttrice": "sta",
        "immatricolazione": "2222-02-01 00:00:00.000000",
        "modello": "tion",
        "targa": "1234r5efdsew",
        "categoria": 7
      },
      {
        "id": 1,
        "casacostruttrice": "Volvo",
        "immatricolazione": "2017-06-01 00:00:00.000000",
        "modello": "V40",
        "targa": "12345678",
        "categoria": 7
      },
      {
        "id": 45,
        "casacostruttrice": "berlina",
        "immatricolazione": "2020-04-01 00:00:00.000000",
        "modello": "lina",
        "targa": "ghjh",
        "categoria": 1
      },
      {
        "id": 46,
        "casacostruttrice": "berlina",
        "immatricolazione": "2005-02-01 00:00:00.000000",
        "modello": "lona",
        "targa": "asdf",
        "categoria": 1
      },
      {
        "id": 47,
        "casacostruttrice": "bella",
        "immatricolazione": "1998-06-01 00:00:00.000000",
        "modello": "bianca",
        "targa": "bella",
        "categoria": 3
      },
      {
        "id": 2,
        "casacostruttrice": "BMW",
        "immatricolazione": "2016-06-01 00:00:00.000000",
        "modello": "Serie 3",
        "targa": "ab124ab",
        "categoria": 7
      },
      {
        "id": 3,
        "casacostruttrice": "Mercedes",
        "immatricolazione": "2014-02-01 00:00:00.000000",
        "modello": "AMG",
        "targa": "ab125ab",
        "categoria": 2
      },
      {
        "id": 6,
        "casacostruttrice": "Nissan",
        "immatricolazione": "2017-02-01 00:00:00.000000",
        "modello": "Qashqai",
        "targa": "ab128ab",
        "categoria": 8
      },
      {
        "id": 6,
        "casacostruttrice": "Nissan",
        "immatricolazione": "2017-02-01 00:00:00.000000",
        "modello": "Qashqai",
        "targa": "ab128ab",
        "categoria": 8
      },
      {
        "id": 6,
        "casacostruttrice": "Nissan",
        "immatricolazione": "2017-02-01 00:00:00.000000",
        "modello": "Qashqai",
        "targa": "ab128ab",
        "categoria": 8
      },
      {
        "id": 6,
        "casacostruttrice": "Nissan",
        "immatricolazione": "2017-02-01 00:00:00.000000",
        "modello": "Qashqai",
        "targa": "ab128ab",
        "categoria": 8
      },
      {
        "id": 6,
        "casacostruttrice": "Nissan",
        "immatricolazione": "2017-02-01 00:00:00.000000",
        "modello": "Qashqai",
        "targa": "ab128ab",
        "categoria": 8
      }
    ];
    return {utenti, auto};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(utenti: Utente[]): number {
    return utenti.length > 0 ? Math.max(...utenti.map(utente => utente.id)) + 1 : 1;
  }
}
