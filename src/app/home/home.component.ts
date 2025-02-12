import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FiltersContainerComponent } from "../components/filters-container/filters-container.component";
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    FiltersContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
