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

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedOffers();
    }
  }
}
