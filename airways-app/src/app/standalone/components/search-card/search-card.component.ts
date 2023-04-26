import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaterialModule } from '../../moduls/material.module';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.less'],
  imports: [
    MaterialModule,
  ],
  standalone: true,
})
export class SearchCardComponent implements OnInit {
  public toppings = new FormControl([{}]);

  public toppingList: any[] = [{ person: 'Adults', count: 0 }, { person: 'Child', count: 0 }, { person: 'Infant', count: 0 }];

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

  public ngOnInit(): void {
    this.toppings.setValue(this.toppingList);
  }
}
