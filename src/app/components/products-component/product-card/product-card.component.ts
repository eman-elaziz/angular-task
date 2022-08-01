import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  constructor() { }
  createRange(rate:number){
    let items: number[] = [];
    for(let i = 1; i <= rate; i++){
      items.push(i);
    }
    return items;
    return new Array(rate);
  }
  ngOnInit(): void {

  }

}
