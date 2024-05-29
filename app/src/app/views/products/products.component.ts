import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { products } from '../../../assets/products';
import { RedCardComponent } from '../../components/red-card/red-card.component';
import { SearchInputComponent } from "../../components/search-input/search-input.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styles: ``,
    imports: [
        CommonModule,
        RouterModule,
        RedCardComponent,
        SearchInputComponent
    ]
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
  }

  getProducts() {
    this.route.queryParamMap.subscribe(queries => {
      if (queries.get('onsale')) {
        this.filterProductsBySale();
      }
      if (queries.get('price') || 'asc') {
        this.orderProductsByPrice();
      }
    });
  }

  filterProductsBySale() {
    this.filteredProducts = products
    .filter(product => this.onSale ? product.onSale : true);
  }

  orderProductsByPrice() {
    this.filteredProducts = products
    .filter(product => this.onSale ? product.onSale : true)
      .sort((a, b) => {
        return this.price === 'asc' ? a.price - b.price : b.price - a.price
      });
  }

  onSearch(search: string) {
    console.log(search);
    this.filteredProducts = this.products.filter(product =>
      product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

}
