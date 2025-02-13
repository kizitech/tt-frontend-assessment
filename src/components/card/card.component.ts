import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs/operators';

interface Offer {
  title: string;
  coupon_discount: string;
  description: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, HttpClientModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  offers: Offer[] = [];
  paginatedOffers: Offer[] = [];
  currentPage = 1;
  itemsPerPage = 16;
  totalPages = 0;
  visiblePages: (number | string)[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers(): void {
    this.http.get<{ data: Offer[] }>('/data/couponDataTest.json')
      .pipe(map(response => response.data || []))
      .subscribe(
        (data) => {
          this.offers = data;
          this.totalPages = Math.ceil(this.offers.length / this.itemsPerPage);
          this.updatePaginatedOffers();
          this.updateVisiblePages();
        },
        (error) => {
          console.error('Error loading offers', error);
          this.offers = [];
        }
      );
  }

  updatePaginatedOffers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedOffers = this.offers.slice(startIndex, endIndex);
  }

  updateVisiblePages(): void {
    const maxVisible = 5;
    const pages: (number | string)[] = [];

    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        pages.push(1, 2, 3, '...', this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        pages.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
      }
    }

    this.visiblePages = pages;
  }

  goToPage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedOffers();
      this.updateVisiblePages();
    }
  }
}
