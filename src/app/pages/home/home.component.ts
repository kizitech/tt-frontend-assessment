import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../../components/footer/footer.component';
import { FiltersContainerComponent } from "../../components/filters-container/filters-container.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { SortingsComponent } from "../../components/sortings/sortings.component";
import { FilterBarComponent } from "../../components/filter-bar/filter-bar.component";
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    FooterComponent,
    HeaderComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    FiltersContainerComponent,
    HeaderComponent,
    SearchBarComponent,
    SortingsComponent,
    FilterBarComponent,
    CardComponent,
    MatPaginatorModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
