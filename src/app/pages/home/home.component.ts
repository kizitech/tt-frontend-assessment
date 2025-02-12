import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { StoreCardComponent } from '../../components/store-card/store-card.component';

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    FooterComponent,
    NavbarComponent,
    FlexLayoutModule,
    FiltersComponent,
    StoreCardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showFiltersContainer = false;

  toggleFiltersContainer() {
    this.showFiltersContainer = !this.showFiltersContainer;
  }
}
