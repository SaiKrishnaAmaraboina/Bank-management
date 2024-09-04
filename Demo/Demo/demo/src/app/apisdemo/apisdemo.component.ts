import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ApiservService } from '../apiservice.service';
@Component({
  selector: 'app-apisdemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apisdemo.component.html',
  styleUrl: './apisdemo.component.css'
})

export class ApisdemoComponent implements OnInit{
 
  constructor(private myserv:ApiservService){}
  products:any=[]
  ngOnInit()  {
    return this.myserv.getallaccounts().subscribe(res=>{
      this.products=res

    },
    err=>{})
  }
}
