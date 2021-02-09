import { Component, Input, OnInit } from '@angular/core';
import { Products } from "../products"
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()  filterByCategory: string = "";
  @Input()  sortBy: string = "";

  products?: Products[];
  
  constructor(private productService : ProductService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  onClick(product: Products): void {
    this.messageService.add(`ProductsComponent: Selected product id=${product.id}`);
  }

}
