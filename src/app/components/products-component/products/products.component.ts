import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/Product.interface';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 public products :Product[] =[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProduct().subscribe(data=>this.products=data)
    console.log(this.products)
  }

}
