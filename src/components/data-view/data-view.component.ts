import { Tag } from 'primeng/tag';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { Component, signal, OnInit } from '@angular/core';
import { CouponService } from '../../services/coupon-service.service';
import {  } from '../../types/couponDataTestType';

@Component({
  selector: 'app-data-view',
  imports: [DataViewModule, DataView, ButtonModule, Tag, CommonModule],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.css',
})
// export class DataViewComponent {
//   products = signal<any>([]);

//   constructor(private productService: ProductService) {}

//   ngOnInit() {
//       this.productService.getProducts().then((data) => {
//           this.products.set(data);
//       });
//   }

//   getSeverity(product: Product) {
//       switch (product.inventoryStatus) {
//           case 'INSTOCK':
//               return 'success';

//           case 'LOWSTOCK':
//               return 'warn';

//           case 'OUTOFSTOCK':
//               return 'danger';

//           default:
//               return null;
//       }
//   };
// }

export class DataViewComponent implements OnInit {
  coupons: any[] = [];

  constructor(private couponService: CouponService) { }

  ngOnInit() {
    this.coupons = this.couponService.getCoupons();
  }
}