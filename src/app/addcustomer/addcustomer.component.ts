import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { BankingService } from '../banking.service';
import { Customers } from '../customers';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  
// customerForm=new FormGroup({
//   dob:new FormControl(),
//   emailid:new FormControl(),
//   password:new FormControl(),
//   aadaharno:new FormControl(),
//   pin:new FormControl(),
//   bankbranch:new FormControl(),
//   openingbalance:new FormControl(),
//   address:new FormControl(),
//   accountno:new FormControl(),
//   gender:new FormControl(),
//   username:new FormControl(),
//   lastname:new FormControl(),
//   firstname:new FormControl()

// });
  regForm: FormGroup;
customer=new Customers("","","","",0,"","","",0,"","",0,0);
  constructor(private service:BankingService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    // this. regForm= this.fb.group({
    //   firstname:this.fb.control('',[Validators.required]),
    //   lastname:this.fb.control('',[Validators.required]),
    //   openingbalance:this.fb.control('',[Validators.required]),
    //   gender:this.fb.control('',[Validators.required]),
    //   dob:this.fb.control('',[Validators.required]),
    //   password:this.fb.control('',[Validators.required]),
    //   accountno:this.fb.control('',[Validators.required]),
    //   aadaharno:this.fb.control('',[Validators.required]),
    //   address:this.fb.control('',[Validators.required]),
    //   bankbranch:this.fb.control('',[Validators.required]),
    //   pin:this.fb.control('',[Validators.required]),
    //   username:this.fb.control('',[Validators.required]),
    //   emailid:this.fb.control('',[Validators.required])
    //   })
    
  }
  onSubmit() {

    this.service.addUser(this.customer).subscribe(
      _data => {
        console.log("data added successfully");
      },
      _error=>{
         console.log("error")
         this.router.navigateByUrl('/mycustomers');

        }
    )
 
}


}
