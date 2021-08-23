import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Auto, TipologiaAutomezzo, Utente} from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private autoUrl = 'api/automezzi'
  private categoriaAutoUrl = 'api/tipologia_automezzo'
  private nuovaAuto: Auto = new class implements Auto {
    casacostruttrice!: string;
    categoria: any;
    id!: number;
    immatricolazione!: Date;
    modello!: string;
    targa!: string;
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`AutoService: ${message}`);
  }

  getAuto(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.autoUrl)
      .pipe(
        catchError(this.handleError<Auto[]>('getAuto', []))
      );
  }

  getCategorie(): Observable<TipologiaAutomezzo[]> {
    return this.http.get<TipologiaAutomezzo[]>(this.categoriaAutoUrl)
      .pipe(
        catchError(this.handleError<TipologiaAutomezzo[]>('getRuoli', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    addAuto(addItem: any) {
      this.nuovaAuto.casacostruttrice = addItem.casacostruttrice;
      this.nuovaAuto.modello = addItem.modello;
      this.nuovaAuto.targa = addItem.targa;
      this.nuovaAuto.immatricolazione = addItem.immatricolazione;
      this.nuovaAuto.categoria = addItem.categoria;

      return this.http.post<Auto>(this.autoUrl, this.nuovaAuto, this.httpOptions).pipe(
        tap((newAuto: Auto) => this.log(`added auto w/ id=${newAuto.id}`)),
        catchError(this.handleError<Auto>('addAuto'))
      );
    }
}
