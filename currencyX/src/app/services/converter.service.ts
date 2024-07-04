import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  exchangeUrl = 'https://api.exchangerate-api.com/v4/latest/USD';

  constructor(private http: HttpClient) { }

  convert(){
    return this.http.get(this.exchangeUrl)
  }

}
