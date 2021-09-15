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

  private utenteUrl = 'http://localhost:8080/api/utente';  // URL to web api
  private ruoloUtenteUrl = 'api/tipologia_utente';
  private nuovoUtente: Utente = new class implements Utente {
    cognome!: string;
    datadinascita!: Date;
    id!: number;
    nome!: string;
    ruolo: any;
    ssoId!: string;
    password!: string;
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`UtenteService: ${message}`);
  }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.utenteUrl}/lista-customers`)
      .pipe(
        catchError(this.handleError<Utente[]>('getUtenti', []))
      );
  }

  getUtente(id: number): Observable<Utente> {
    const url = `${this.utenteUrl}/id=${id}`;
    return this.http.get<Utente>(url)
      .pipe(
      catchError(this.handleError<Utente>(`getUtente id=${id}`))
    );
  }

  getRuoli(): Observable<TipologiaUtente[]>{
    return this.http.get<TipologiaUtente[]>(`${this.utenteUrl}/lista-ruoli`)
      .pipe(
        catchError(this.handleError<TipologiaUtente[]>('getRuoli', []))
      );
  }

  getRuolo(id: number): Observable<TipologiaUtente> {
    const url = `${this.utenteUrl}/ruolo=${id}`;
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
    this.nuovoUtente.ssoId = addItem.ssoId;
    this.nuovoUtente.nome = addItem.nome;
    this.nuovoUtente.cognome = addItem.cognome;
    this.nuovoUtente.ruolo = addItem.ruolo;
    if (addItem.ruolo==="1"){
      this.nuovoUtente.ruolo = {'ruolo':'customer','id':'1'};
    }
    else if (addItem.ruolo==="2"){
      this.nuovoUtente.ruolo = {'ruolo':'superuser','id':'2'};
    }
    this.nuovoUtente.datadinascita = addItem['data di nascita'];
    this.nuovoUtente.password = addItem.password;
    return this.http.post<Utente>(`${this.utenteUrl}/inserisci`, this.nuovoUtente, this.httpOptions).pipe(
      catchError(this.handleError<Utente>('addUtente'))
    );
  }

  updateUtente(updateItem: any): Observable<any> {
    this.nuovoUtente.id = updateItem.id;
    this.nuovoUtente.ssoId = updateItem.ssoId;
    this.nuovoUtente.nome = updateItem.nome;
    this.nuovoUtente.cognome = updateItem.cognome;
    if (updateItem.ruolo==="1"){
      this.nuovoUtente.ruolo = {'ruolo':'customer','id':'1'};
    }
    else if (updateItem.ruolo==="2"){
      this.nuovoUtente.ruolo = {'ruolo':'superuser','id':'2'};
    }
    this.nuovoUtente.datadinascita = updateItem['data di nascita'];
    this.nuovoUtente.password = updateItem.password;
    return this.http.put(`${this.utenteUrl}/modifica`, this.nuovoUtente, this.httpOptions).pipe(
      tap(_ => {
        delete this.nuovoUtente.id;
      }),
      catchError(this.handleError<any>('updateUtente'))
    );
  }

  deleteUtente(id: number): Observable<Utente> {
    const url = `${this.utenteUrl}/elimina/${id}`;
    return this.http.delete<Utente>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted utente id=${id}`)),
      catchError(this.handleError<Utente>('deleteUtente'))
    );
  }
}
