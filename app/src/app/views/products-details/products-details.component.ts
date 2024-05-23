import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { products } from '../../../assets/products';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './products-details.component.html',
  styles: ``
})
export class ProductsDetailsComponent implements OnInit {

  id = "";
  foundProduct: Product = {
    _id: '',
      title: '',
      colors: [''],
      stock: 0,
      images: [''],
      description: '',
      price: 0,
      onSale: false,
  }

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || "";
    })

    this.foundProduct = products.find(product => product._id == this.id) || {
      _id: '',
      title: '',
      colors: [''],
      stock: 0,
      images: [''],
      description: '',
      price: 0,
      onSale: false,
    };
  }
}
