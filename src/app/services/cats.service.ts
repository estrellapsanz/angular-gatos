import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cat } from '../models/cat.interface';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  api_key: string = '4ed7ee94-e580-483e-b3f3-9a5448716e7f';

  constructor(private http: HttpClient) {}

  getFavorites(): Observable<Cat[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.api_key,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Cross-Origin': 'true',
    });

    return this.http.get<Cat[]>(
      'https://thecatapi.com/v1/images/search?limit=100',
      { headers }
    );
  }

  getRandomCat(): Observable<Cat> {
    return this.http.get<Cat>('https://api.thecatapi.com/v1/images/search');
  }

  getPicture(): Observable<any> {
    return this.http.get<Cat>('https://picsum.photos/v2/list');
  }

  getImageById(id: string): Observable<Image> {
    return this.http.get<Image>('https://picsum.photos/id/' + id + '/info');
  }

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
