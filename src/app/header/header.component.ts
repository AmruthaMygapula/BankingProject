import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
  roleAdmin(){
    if (localStorage.getItem('admindetails')){
      return true;
    }
    else{
      return false;
    }
   }

   roleUser(){
    if (localStorage.getItem('userdetails')){
      return true;
    }
    else{
      return false;
    }
   }
   Loggedadmin(){
     if(localStorage.getItem('admindetails')){
       return true;
     }
     else{
       return false;
     }
   }
   LoggedUser(){
     if(localStorage.getItem('userdetails')){
       return true;
     }
     else{
       return false;
     }
   }


}
