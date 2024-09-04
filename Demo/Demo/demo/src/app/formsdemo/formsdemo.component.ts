import { Component } from '@angular/core';
import { TemplatedrivenfromComponent } from '../templatedrivenfrom/templatedrivenfrom.component';
import { ReactivedrivenfromComponent } from '../reactivedrivenfrom/reactivedrivenfrom.component';
@Component({
  selector: 'app-formsdemo',
  standalone: true,
  imports: [TemplatedrivenfromComponent, ReactivedrivenfromComponent],
  templateUrl: './formsdemo.component.html',
  styleUrl: './formsdemo.component.css'
})
export class FormsdemoComponent {

}
