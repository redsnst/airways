import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.less'],
  imports: [FormsModule, MatSelectModule, CommonModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule],
  standalone: true,
})
export class SearchCardComponent {
  public toppings = new FormControl('');

  public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  public nodes: any[] = [{
    key: '0',
    label: 'Dublin (DUB)',
  }, {
    key: '1',
    label: 'Aberdeen (ABZ)',
  }, {
    key: '2',
    label: 'Amsterdam (AMS)',
  }, {
    key: '3',
    label: 'Baku (GYD)',
  }, {
    key: '4',
    label: 'Barcelona (BCN)',
  }, {
    key: '5',
    label: 'Catania (CTA)',
  }];
}
