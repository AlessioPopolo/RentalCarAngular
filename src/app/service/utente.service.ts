import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`UtenteService: ${message}`);
  }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.utenteUrl)
      .pipe(
        tap(_ => console.log('fetched utenti')),
        catchError(this.handleError<Utente[]>('getUtenti', []))
      );
  }

  getUtente(id: number): Observable<Utente> {
    const url = `${this.utenteUrl}/${id}`;
    return this.http.get<Utente>(url).pipe(
      tap(_ => this.log(`fetched utente id=${id}`)),
      catchError(this.handleError<Utente>(`getUtente id=${id}`))
    );
  }

  getRuoli(): Observable<TipologiaUtente[]>{
    return this.http.get<TipologiaUtente[]>(this.ruoloUtenteUrl)
      .pipe(
        catchError(this.handleError<TipologiaUtente[]>('getRuoli', []))
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

  addUtente() {
    console.log("utente add")
  }
}
