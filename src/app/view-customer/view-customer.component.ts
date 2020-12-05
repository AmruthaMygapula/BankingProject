import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from 'querystring';
import { BankingService } from '../banking.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customer=new Customers("","","","",0,"","","",0,"","",0,0);

  constructor(private service:BankingService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.service.getCustomer(this.activatedroute.snapshot.params.accountno).subscribe((result)=>
    {
      console.log(result)
      this.customer=result;
    },
      error=>{
        return console.log("Exception occurred");
      }
    )
  }
 
}
