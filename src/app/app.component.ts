import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics=['Angular','react','vue'];
  name="Newton";

  onButtonPress() {
    this.name = `${this.name}  Hello world`;
  }
  
}
