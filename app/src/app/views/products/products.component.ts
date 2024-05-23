import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { products } from '../../../assets/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent implements OnInit {

  onSale: boolean = false;
  price: string = 'asc';

  products: Product[] = products;
  filteredProducts: Array<Product> = this.products;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.filteredProductsByPrice();
  }

  getProducts() {
    this.route.queryParamMap.subscribe(queries => {
      this.onSale = queries.get('onSale') === 'true' ? true : false;
      this.price = queries.get('price') || 'asc';

      console.log(this.onSale, " ", this.price);
    });
  }

  filteredProductsByPrice() {
    this.filteredProducts = products
    .filter(product => this.onSale ? product.onSale : true)
      .sort((a, b) => {
        return this.price === 'asc' ? a.price - b.price : b.price - a.price
      });
  }

}
