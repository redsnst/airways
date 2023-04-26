import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [],
})
export class MaterialModule { }
