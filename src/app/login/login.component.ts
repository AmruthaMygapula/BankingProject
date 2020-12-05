import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'util';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data1;
data2;
data3;
info;

loginForm=new FormGroup({
  email:new FormControl(),
  password:new FormControl()
});
constructor(private service:BankingService,private router:Router) { }

  ngOnInit() {
   
  }

  login(){
    this.service.getAllLogins().subscribe(response=>{
      this.data1=response;
     
      
    // console.log(this.data1[0]);
console.log(this.loginForm.value.email);


if(this.loginForm.value.email===this.data1[0].email)
{
  if(this.data1[0].roles==='admin')
  {
    this.info='LoggedIn successfully'
  console.log(this.info);
  this.router.navigateByUrl('/adminhome');
  setTimeout(()=>{this.info=null;
  },500);
  
  localStorage.setItem('admindetails',JSON.stringify(this.data1[0]));
  console.log('stored locally');
}
else{
  this.info='enter a valid mail id';
}
  
  }
})
    


  this.service.getAllCustomers().subscribe(custdata=>{
   custdata
console.log(custdata);
   for(let i=0;i<custdata.length;i++){


   if(this.loginForm.value.email===custdata[i].emailid)
    {
      if(custdata[i].role==='user')
      {
        this.info='LoggedIn successfully'
      console.log(this.info);
      this.router.navigateByUrl('/userhome');
      setTimeout(()=>{this.info=null;
      },500);
      
      localStorage.setItem('userdetails',JSON.stringify(custdata[i]));
      console.log('stored locally');
    }
    else{
      this.info='enter a valid mail id';
    }
      
      }

    }
    
  })
  

   }
}




