import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cat } from '../models/cat.interface';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  api_key: string = '4ed7ee94-e580-483e-b3f3-9a5448716e7f';

  constructor(private http: HttpClient) {}

  
  getCats(): Observable<Cat[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.api_key,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Cross-Origin': 'true',
    });

    return this.http.get<Cat[]>('https://api.thecatapi.com/v1' + '/breeds', {
      headers,
    });
  }

  getCatById(id: string): Observable<Cat> {
    const headers = new HttpHeaders({
      'x-api-key': this.api_key,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Cross-Origin': 'true',
    });

    return this.http.get<Cat>(
      'https://api.thecatapi.com/v1' + '/breeds/' + id,
      {
        headers,
      }
    );
  }

  getCatImageById(id: string): Observable<Cat> {
    const headers = new HttpHeaders({
      'x-api-key': this.api_key,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Cross-Origin': 'true',
    });

    return this.http.get<Cat>(
      'https://api.thecatapi.com/v1' + '/images/' + id,
      {
        headers,
      }
    );
  }
}
