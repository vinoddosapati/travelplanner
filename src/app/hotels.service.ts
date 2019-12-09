import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) { }

  getHotels(query: any) {
    const dest = {city: query};
    return this._httpClient.get<any>('/api/hotels', {params: dest});
  }
}
