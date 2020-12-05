import { Component, OnInit } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.css']
})
export class MytransactionsComponent implements OnInit {
transactions;
  constructor(private service:BankingService) { }

  ngOnInit(){
    this.service.getalltransactions().subscribe(result=>
      {
        console.log(result)
        this.transactions=result;
      },
      error=>{
        console.log("Exception occurred")
      }
      )
  }

}
