import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) { }

  getSkyScannerFlights(sourceairport: any, destairport: any, traveldate: any) {
    const sourceDest = {source: sourceairport, dest: destairport, flightdate: traveldate};
    return this._httpClient.get<any>('api/flights', {params: sourceDest});
  }

  getAirportsList(paramatersAirport: any) {
    return this._httpClient.get<any>('api/fetchAirports', {params: paramatersAirport});
  }
}
