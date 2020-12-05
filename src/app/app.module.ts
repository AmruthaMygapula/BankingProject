import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostnewsComponent } from './postnews/postnews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MycustomersComponent } from './mycustomers/mycustomers.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomergriveancesComponent } from './customergriveances/customergriveances.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import { AtmsimulatorComponent } from './atmsimulator/atmsimulator.component';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { PostmsgComponent } from './postmsg/postmsg.component';
import { FilterPipe } from './filter.pipe';
import{HttpClientModule} from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SubmitgriveancesComponent } from './submitgriveances/submitgriveances.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostnewsComponent,
    AboutUsComponent,
    UserhomeComponent,
    AdminhomeComponent,
    MycustomersComponent,
    AddcustomerComponent,
    CustomergriveancesComponent,
    MytransactionsComponent,
    AtmsimulatorComponent,
    TransferfundsComponent,
    PostmsgComponent,
    FilterPipe,
    LoginComponent,
    HomeComponent,
    OurteamComponent,
    BeneficiaryComponent,
    ViewCustomerComponent,
    EditCustomerComponent,
    MyprofileComponent,
    SubmitgriveancesComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 FormsModule,
 HttpClientModule,
 ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
