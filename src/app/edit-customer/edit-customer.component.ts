import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankingService } from '../banking.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer=new Customers("","","","",0,"","","",0,"","",0,0);

  constructor(private service:BankingService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedroute.snapshot.params.accountno)
    this.service.getCustomer(this.activatedroute.snapshot.params.accountno).subscribe((result)=>
    {
      console.log(result)
      this.customer=result;
    },
    (error)=>{
      console.log("error occurred");
    }
    )

  }
  UpdateCustomerDetails(){
    this.service.updateCustomer(this.customer).subscribe(
      data=>
      {
     console.log("error")
      },
        error=>
        {
          console.log("updated successfully")
      this.router.navigateByUrl('/mycustomers')
      })
  }

  }

