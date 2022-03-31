import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl = "http://localhost:8080/api/authors";

  private httpOptions : any;

  constructor(private http : HttpClient ) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.homebooks.forangular.v2+hal+json',
      })
    };
  }

  getAuthors() : Observable<Author[]> {
    return this.http.get(this.apiUrl, this.httpOptions).pipe(map((res : any) => res));
  }

  getAuthor(id : number) : Observable<Author> {
    return this.http.get(this.apiUrl + `/${id}`, this.httpOptions).pipe(map((res : any) => res));
  } 
}
