import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WAD_WAD';
  ngOnInit() {
    this.preloadImage();
  }
  preloadImage() {
    const img = new Image();
    img.src = "assets/images/loginPageImg.svg";
  }
}
