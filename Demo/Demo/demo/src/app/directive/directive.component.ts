import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  xyz = true;
  emp = [{ name: 'John Doe', id: 1 }];
  fruits = ['Apple', 'Banana'];
  eyemp = [{ UID: '001', NAME: 'Alice' }];
}
