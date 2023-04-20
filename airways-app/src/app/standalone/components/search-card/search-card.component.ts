import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.less'],
  imports: [FormsModule],
  standalone: true,
})
export class SearchCardComponent {
  public selectedFrom = 'Dublin';
}
