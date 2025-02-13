import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-sortings',
  imports: [MatIconModule, MatSelectModule],
  templateUrl: './sortings.component.html',
  styleUrl: './sortings.component.css'
})
export class SortingsComponent {
  sortOrder = signal('newest');
}
