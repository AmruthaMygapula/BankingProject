import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { BankingService } from '../banking.service';
import { Beneficiary } from '../beneficiary';
import { from } from 'rxjs';


@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
  benform:FormGroup
beneficiary=new Beneficiary("","",0,"","");
  constructor(private service:BankingService,private router:Router,private fb:FormBuilder) { }
  ngOnInit(){
    this. benform= this.fb.group({
      firstname:this.fb.control('',[Validators.required]),
      lastname:this.fb.control('',[Validators.required]),
      accountno:this.fb.control('',[Validators.required]),
      emailId:this.fb.control('',[Validators.required])
      })
    
  }
  
 
  onSubmit(){
    
    this.service.addBeneficiary(this.beneficiary).subscribe(
      data => {
        console.log("data added successfully");
      },
      error=>{
         console.log("error")
         this.router.navigateByUrl('/customergrive');
        }
    )
  }

}
