import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FiltersComponent } from '../filters/filters.component'; // Adjust the import path as necessary

@Component({
  selector: 'app-filters-container',
  imports: [CommonModule, MatIconModule, FlexLayoutModule, FiltersComponent],
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.css']
})

export class FiltersContainerComponent {
  showFiltersContainer = signal(false);

  toggleFiltersContainer() {
    this.showFiltersContainer.set(!this.showFiltersContainer());
  }
}