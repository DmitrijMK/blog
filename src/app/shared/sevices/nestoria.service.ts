import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class NestoriaService {
  private apiUrl = 'https://api.nestoria.co.uk/api';
  public datas = new Subject();
  constructor(private http: HttpClient) {
  }

  getData(search) {
    const params = new URLSearchParams();
    params.set('encoding', 'json');
    params.set('pretty', '1');
    params.set('action', 'search_listings');
    params.set('country', 'uk');
    params.set('listing_type', 'buy');
    params.set('place_name', `${search}`);

    const jsonUrl = this.apiUrl + '?' + params.toString();
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    return this.http.get(proxy + jsonUrl);
  }
}
