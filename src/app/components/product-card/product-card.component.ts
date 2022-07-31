import { Component, OnInit ,Input } from '@angular/core';
import { PRODUCTS } from  'src/app/mock-products';
import { Product } from 'src/app/Product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {

  }

}
