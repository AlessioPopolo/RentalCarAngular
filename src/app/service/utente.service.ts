import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {TipologiaUtente, Utente} from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private utenteUrl = 'api/utenti';  // URL to web api
  private ruoloUtenteUrl = 'api/tipologia_utente';
  private nuovoUtente: Utente = new class implements Utente {
    cognome!: string;
    datadinascita!: Date;
    id!: number;
    nome!: string;
    ruolo: any;
    sso_id!: string;
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`UtenteService: ${message}`);
  }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.utenteUrl)
      .pipe(
        catchError(this.handleError<Utente[]>('getUtenti', []))
      );
  }

  getUtente(id: number): Observable<Utente> {
    const url = `${this.utenteUrl}/${id}`;
    return this.http.get<Utente>(url)
      .pipe(
      catchError(this.handleError<Utente>(`getUtente id=${id}`))
    );
  }

  getRuoli(): Observable<TipologiaUtente[]>{
    return this.http.get<TipologiaUtente[]>(this.ruoloUtenteUrl)
      .pipe(
        catchError(this.handleError<TipologiaUtente[]>('getRuoli', []))
      );
  }

  getRuolo(id: number): Observable<TipologiaUtente> {
    const url = `${this.ruoloUtenteUrl}/${id}`;
    return this.http.get<TipologiaUtente>(url)
      .pipe(
        catchError(this.handleError<TipologiaUtente>(`getRuolo id=${id}`))
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

  addUtente(addItem: any): Observable<Utente> {
    this.nuovoUtente.sso_id = addItem.sso_id;
    this.nuovoUtente.nome = addItem.nome;
    this.nuovoUtente.cognome = addItem.cognome;
    this.nuovoUtente.ruolo = addItem.ruolo;
    this.nuovoUtente.datadinascita = addItem['data di nascita'];
    return this.http.post<Utente>(this.utenteUrl, this.nuovoUtente, this.httpOptions).pipe(
      catchError(this.handleError<Utente>('addUtente'))
    );
  }

  updateUtente(updateItem: any): Observable<any> {
    this.nuovoUtente.id = updateItem.id;
    this.nuovoUtente.sso_id = updateItem.sso_id;
    this.nuovoUtente.nome = updateItem.nome;
    this.nuovoUtente.cognome = updateItem.cognome;
    this.nuovoUtente.ruolo = updateItem.ruolo;
    this.nuovoUtente.datadinascita = updateItem['data di nascita'];

    return this.http.put(this.utenteUrl, this.nuovoUtente, this.httpOptions).pipe(
      tap(_ => {
        delete this.nuovoUtente.id;
      }),
      catchError(this.handleError<any>('updateUtente'))
    );
  }
}
