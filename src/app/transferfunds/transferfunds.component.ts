import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BankingService } from '../banking.service';
import { Beneficiary } from '../beneficiary';

@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {
  beneficiaries=new Beneficiary("","",0,"","");

  constructor(private  router:Router,private activatedroute:ActivatedRoute,private service:BankingService) { }

  ngOnInit() {
    console.log(this.activatedroute.snapshot.params.accountno+"reached up")
    this.service.getBeneficiary(this.activatedroute.snapshot.params.accountno).subscribe((result)=>
    {
      console.log("id reached "+result);
      this.beneficiaries=result;
    },
    (error)=>{
      console.log("error occurred");
    }
    )
  }
transferfund(){
  this.router.navigateByUrl('transferfunds');
}

}
