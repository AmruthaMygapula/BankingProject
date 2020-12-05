import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BankingService } from '../banking.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-mycustomers',
  templateUrl: './mycustomers.component.html',
  styleUrls: ['./mycustomers.component.css']
})
export class MycustomersComponent implements OnInit  {

  _customerList:Customers[]
  constructor(private service:BankingService,private router:Router ) {}

  ngOnInit() {
    this.service.getAllCustomers().subscribe(
      result=>{
      console.log(result),
      this._customerList=result;
      },
    _error=>console.log("Exception occurred")
      )
  }
  gotoEditCustomer(accountno:number){
console.log("id "+accountno);
this.router.navigate(['/editCustomer',accountno]);
  }

  gotoViewCustomer(accountno:number){
    console.log("AccountNo "+accountno);
this.router.navigate(['/viewCustomer',accountno]);
  }
  deleteCustomer(accountno:number){
this.service.deletecustomerById(accountno).subscribe(
data=>{
console.log("Exception occurred")

},
error=>{
console.log("Deleted successfully")
this.router.navigate(['/mycustomers']);
}
)
  }
}
