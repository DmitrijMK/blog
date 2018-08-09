import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NestoriaService {
  private apiUrl = 'https://api.nestoria.co.uk/api';
  dataSource = new Subject();

  constructor(private http: HttpClient) {
  }

  getData(search = 'brighton'): Observable<any> {
    const params = new URLSearchParams();
    params.set('encoding', 'json');
    params.set('pretty', '1');
    params.set('action', 'search_listings');
    params.set('country', 'uk');
    params.set('listing_type', 'buy');
    params.set('place_name', `${search}`);

    const jsonUrl = this.apiUrl + '?' + params.toString();
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    return this.http.get(proxy + jsonUrl)
      .pipe(map(data => {
        console.log(data);
        return data;
      }));
  }
}
