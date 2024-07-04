import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  baseCurrency: string = 'USD';

  exchangeUrl = `https://api.exchangerate-api.com/v4/latest/${this.baseCurrency}`;

  constructor(private http: HttpClient) { }

  convert(){
    return this.http.get(this.exchangeUrl)
  }

}
