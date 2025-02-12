import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule, MatChipListbox, MatChip } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatSelectionList, MatListOption } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-filter-bar',
  imports: [
    FormsModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatRadioModule,
    MatButtonModule,
    MatSliderModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectionList,
    MatListOption,
    MatChipListbox,
    MatChip,
  ],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {

}
