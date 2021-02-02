import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()  filterByCategory: string = "";

  products = PRODUCTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
