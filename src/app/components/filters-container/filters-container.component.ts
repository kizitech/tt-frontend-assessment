import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule, MatChipListbox, MatChip } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule, MatSelectionList, MatListOption } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-filters-container',
  imports: [
    CommonModule,
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
    MatIconModule,
  ],
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.css']
})

export class FiltersContainerComponent {
  showFiltersContainer = signal(false);

  toggleFiltersContainer() {
    this.showFiltersContainer.set(!this.showFiltersContainer());
  }
}