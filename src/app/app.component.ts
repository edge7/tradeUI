import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trading As A Business';
  hideElement = false;
  hideBackGround(){
    this.hideElement= true;
  }

}
