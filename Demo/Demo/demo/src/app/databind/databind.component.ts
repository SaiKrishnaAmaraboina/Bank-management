import { Component } from '@angular/core';
@Component({
  selector: 'app-databind',
  standalone: true,
  imports: [],
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent {
  name="Teju";
  abc(){
    console.log("hii abc function");
    this.name="Suresh";
  }

}
