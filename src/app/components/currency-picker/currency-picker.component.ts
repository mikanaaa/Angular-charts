import { Component, Input } from '@angular/core';
import { currencies } from '../../data/currencies';
import { Currency } from '../../models/Currency';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.scss'],
})
export class CurrencyPickerComponent {
  currencies: Array<Currency> = currencies;
  constructor(public dataService: DataService) {
  }
}
