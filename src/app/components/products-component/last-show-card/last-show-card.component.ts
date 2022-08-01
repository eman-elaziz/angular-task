import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-last-show-card',
  templateUrl: './last-show-card.component.html',
  styleUrls: ['./last-show-card.component.css']
})
export class LastShowCardComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
