import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {Auto, TipologiaAutomezzo} from "../model/in-memory-data.service";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private autoUrl = 'api/automezzi'
  private categoriaAutoUrl = 'api/tipologia_automezzo'

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`AutoService: ${message}`);
  }

  getAuto(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.autoUrl)
      .pipe(
        tap(_ => console.log('fetched auto')),
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


}
