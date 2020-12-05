import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankingService } from '../banking.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-customergriveances',
  templateUrl: './customergriveances.component.html',
  styleUrls: ['./customergriveances.component.css']
})
export class CustomergriveancesComponent implements OnInit {
  constructor(private service:BankingService,private router:Router){}
 beneficiaries;
 search:String
  ngOnInit(){
    this.service.getAllBeneficiaries().subscribe(result=>
      {
        console.log(result)
        this.beneficiaries=result;
      },
      error=>{
        console.log("Exception occurred")
      }
      )
  }
  deletebenef(accountno:number){
    this.service.deletebenef(accountno).subscribe(
    data=>{
    console.log("Exception occurred")
    
    },
    error=>{
    console.log("Deleted successfully")
    this.router.navigate(['/customergrive']);
    }
    )
      }
      directTotransfer(accountno:number){
        console.log("id "+accountno);
        this.router.navigate(['/transferfunds',accountno]);
          }
}
