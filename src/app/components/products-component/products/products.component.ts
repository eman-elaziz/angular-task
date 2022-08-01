import { Component, OnInit ,Input } from '@angular/core';
import { PRODUCTS } from  'src/app/mock-products';
import { Product } from 'src/app/Product.interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products :Product[]=PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
