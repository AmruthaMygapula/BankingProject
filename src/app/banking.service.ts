import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiary } from './beneficiary';
import { Customers } from './customers';


@Injectable({
  providedIn: 'root'
})
export class BankingService {


  constructor(private http:HttpClient) { }
  

getAllLogins():Observable<any> {
  return this.http.get("http://localhost:8090/getalllogins");
}

getAllCustomers():Observable<any>{
  return this.http.get<any>("http://localhost:8090/getallcustomers");
}


addUser(customer: Customers):Observable<any>{
  return this.http.post("http://localhost:8090/addcustomer",customer);
}
getCustomer(id:number):Observable<any>{
  return this.http.get<any>(`http://localhost:8090/getCustomerById/${id}`);
}
updateCustomer(customer: Customers){
  return this.http.put("http://localhost:8090/updatecustomer",customer);
}


deletecustomerById(id:number):Observable<any>{
  return this.http.delete(`http://localhost:8090/deletecustomerbyid/${id}`);
}
addBeneficiary(beneficiary: Beneficiary):Observable<any>{
  return this.http.post("http://localhost:8090/addbeneficiary",beneficiary);
}

getAllBeneficiaries():Observable<any> {
  return this.http.get("http://localhost:8090/getallbeneficiary");
}

getalltransactions():Observable<any> {
  return this.http.get("http://localhost:8090/getalltransactions");
}

deletebenef(id:number):Observable<any>{
  return this.http.delete(`http://localhost:8090/deletebeneficiary/${id}`);
}

getBeneficiary(id:number):Observable<any>{
  return this.http.get<any>(`http://localhost:8090/getBeneficiaryById/${id}`);
}


}
