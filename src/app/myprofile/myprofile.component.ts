import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  customer=new Customers("","","","",0,"","","",0,"","",0,0);


  constructor() { }

  ngOnInit() {
    this.customer=JSON.parse(localStorage.getItem('userdetails'));
    console.log(this.customer); 
  }

}

