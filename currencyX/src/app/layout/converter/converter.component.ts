import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConverterService } from 'src/app/services/converter.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent  {


  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'SGD', 'CHF', 'MYR', 'JPY', 'CNY'];
  baseCurrency: string = 'USD';
  quoteCurrency: string = 'EUR';
  amount: number = 1;
  result: number | null = null;

  constructor(private http: HttpClient,
              private converterService: ConverterService
  ) {}

  ngOnInit(): void {}


  convert() {
    this.converterService.convert().subscribe((data: any) => {
          const rate = data.rates[this.quoteCurrency];
          this.result = this.amount * rate;
        })
  }


}
