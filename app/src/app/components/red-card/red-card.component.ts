import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'red-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './red-card.component.html',
  styles: ``
})
export class RedCardComponent {

  @Input() index: string = '';
  @Input() total: number = 0;
  @Input({ required: true }) item: Product = {
    _id: '',
    title: '',
    colors: [],
    stock: 0,
    images: [],
    price: 0,
    onSale: false
  };


}
