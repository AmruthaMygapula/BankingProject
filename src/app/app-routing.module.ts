import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AtmsimulatorComponent } from './atmsimulator/atmsimulator.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { CustomergriveancesComponent } from './customergriveances/customergriveances.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MycustomersComponent } from './mycustomers/mycustomers.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PostmsgComponent } from './postmsg/postmsg.component';
import { PostnewsComponent } from './postnews/postnews.component';
import { SubmitgriveancesComponent } from './submitgriveances/submitgriveances.component';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  {path:'postnews',component:PostnewsComponent},
  {path:'postmsg',component:PostmsgComponent},
  {path:'our-team',component:OurteamComponent},
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'addcustomer',component:AddcustomerComponent},
  {path:'viewCustomer/:accountno',component:ViewCustomerComponent},
  {path:'viewCustomer',component:ViewCustomerComponent},
  {path:'editCustomer',component:EditCustomerComponent},
  {path:'editCustomer/:accountno',component:EditCustomerComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'mytransactions',component:MytransactionsComponent},
  {path:'transferfunds/:accountno',component:TransferfundsComponent},
  {path:'atmsimulator',component:AtmsimulatorComponent},
  {path:'mycustomers',component:MycustomersComponent},
  {path:'beneficiary',component:BeneficiaryComponent},
  {path:'login',component:LoginComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'customergrive',component:CustomergriveancesComponent},
  {path:'submitgriveance',component:SubmitgriveancesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
