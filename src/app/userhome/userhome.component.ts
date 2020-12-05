import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  customer=new Customers("","","","",0,"","","",0,"","",0,0);

  constructor() { }

  ngOnInit() {
    this.customer=JSON.parse(localStorage.getItem('userdetails'));
      console.log(this.customer); 
    
  }

  isAdmin(){
   if (localStorage.getItem('admindetails')){
     return true;
   }
   else{
     return false;
   }
  }

}
