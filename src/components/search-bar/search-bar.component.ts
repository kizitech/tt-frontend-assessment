import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm = '';

  constructor(private searchService: SearchService) { }

  onSearchChange() {
    this.searchService.setSearchTerm(this.searchTerm);
  }
}
