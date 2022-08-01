import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-offer-button',
  templateUrl: './offer-button.component.html',
  styleUrls: ['./offer-button.component.css']
})
export class OfferButtonComponent implements OnInit {
@Input() text:string="";
@Input() color:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
