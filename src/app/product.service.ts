import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from "./products"
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Products[]> {
    this.messageService.console('ProductService: fetched products');
    return of(PRODUCTS);
  }
  
}
