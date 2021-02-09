import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string = "";

  console(message: string) {
    console.log(message);
  }

  dom(message: string){
    this.message = message;
  }
}
