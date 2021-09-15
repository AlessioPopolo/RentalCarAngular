import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {Auto, Prenotazione, Utente} from "../model/interfaces";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  private prenotazioneUrl = 'http://localhost:8080/api/prenotazioni';  // URL to web api
  private nuovaPrenotazione: Prenotazione = new class implements Prenotazione {
    id!: number;
    utente!: Utente;
    automezzo!: Auto;
    startdate!: Date;
    enddate!: Date;
    approved!: boolean;
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`PrenotazioniService: ${message}`);
  }

  getPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(`${this.prenotazioneUrl}/lista-prenotazioni`)
      .pipe(
        catchError(this.handleError<Prenotazione[]>('getPrenotazioni', []))
      );
  }

  getPrenotazione(id: number): Observable<Prenotazione> {
    const url = `${this.prenotazioneUrl}/id=${id}`;
    return this.http.get<Prenotazione>(url)
      .pipe(
        catchError(this.handleError<Prenotazione>(`getPrenotazione id=${id}`))
      );
  }

  getPrenotazioneByUtente(id: number): Observable<Prenotazione> {
    const url = `${this.prenotazioneUrl}/utente=${id}`;
    return this.http.get<Prenotazione>(url)
      .pipe(
        catchError(this.handleError<Prenotazione>(`getPrenotazioneByUtente id=${id}`))
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

  addPrenotazione(addItem: any): Observable<Prenotazione> {
    this.nuovaPrenotazione.utente = addItem.utente;
    this.nuovaPrenotazione.automezzo = addItem.automezzo;
    this.nuovaPrenotazione.startdate = addItem.startdate;
    this.nuovaPrenotazione.enddate = addItem.enddate;
    this.nuovaPrenotazione.approved = false;
    return this.http.post<Prenotazione>(`${this.prenotazioneUrl}/inserisci`, this.nuovaPrenotazione, this.httpOptions).pipe(
      catchError(this.handleError<Prenotazione>('addPrenotazione'))
    );
  }

  updatePrenotazione(updateItem: any): Observable<any> {
    this.nuovaPrenotazione.id = updateItem.id
    this.nuovaPrenotazione.utente = updateItem.utente;
    this.nuovaPrenotazione.automezzo = updateItem.automezzo;
    this.nuovaPrenotazione.startdate = updateItem.startdate;
    this.nuovaPrenotazione.enddate = updateItem.enddate;
    this.nuovaPrenotazione.approved = false;
    console.log(this.nuovaPrenotazione);
    return this.http.put(`${this.prenotazioneUrl}/modifica`, this.nuovaPrenotazione, this.httpOptions).pipe(
      tap(_ => {
        delete this.nuovaPrenotazione.id;
      }),
      catchError(this.handleError<any>('updatePrenotazione'))
    );
  }

  deletePrenotazione(id: number): Observable<Prenotazione> {
    const url = `${this.prenotazioneUrl}/elimina/${id}`;
    return this.http.delete<Prenotazione>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted prenotazione id=${id}`)),
      catchError(this.handleError<Prenotazione>('deletePrenotazione'))
    );
  }

}
