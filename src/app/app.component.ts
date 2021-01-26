import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Maimon Shop';
  msg = "";

  buyItem(){
    this.msg = (this.msg ? "" : "Thank you for your order!");
  }
}
