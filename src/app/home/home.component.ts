import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../components/footer/footer.component';
import { FiltersContainerComponent } from "../components/filters-container/filters-container.component";
import { HeaderComponent } from "../components/header/header.component";
import { SearchBarComponent } from "../components/search-bar/search-bar.component";
import { SortingsComponent } from "../components/sortings/sortings.component";

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    FooterComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    FiltersContainerComponent,
    HeaderComponent,
    SearchBarComponent,
    SortingsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
