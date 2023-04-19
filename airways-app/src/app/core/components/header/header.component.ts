import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  public selectedDateFormat = 'MM/DD/YYYY';

  public selectedCurrency = 'EUR';
}
