import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MifortAngularTask4';
  numbers: number[] = [1, 2, 3];
  isShow = false;
  constructor() {
    setTimeout(() => {
      this.numbers = [1, 3, 6];
      this.isShow = true;
    }, 3000);
  }
}
