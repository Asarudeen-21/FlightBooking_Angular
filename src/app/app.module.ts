import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirlinesComponent } from './airlines/airlines.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { AddairlinesComponent } from './addairlines/addairlines.component';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightinventoriesComponent } from './flightinventories/flightinventories.component';
import { HomeComponent } from './home/home.component';
import { AdddiscountsComponent } from './adddiscounts/adddiscounts.component';
import { AddflightinventoryComponent } from './addflightinventory/addflightinventory.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { SearchComponent } from './search/search.component';
import { AvailableflightsComponent } from './availableflights/availableflights.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ManagebookingsComponent } from './managebookings/managebookings.component';
import { GetdiscountsComponent } from './getdiscounts/getdiscounts.component';
import { BookingflightsComponent } from './bookingflights/bookingflights.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AirlinesComponent,
    RegisteradminComponent,
    AddairlinesComponent,
    FlightinventoriesComponent,
    HomeComponent,
    AdddiscountsComponent,
    AddflightinventoryComponent,
    DiscountsComponent,
    SearchComponent,
    AvailableflightsComponent,
    UserhomeComponent,
    ManagebookingsComponent,
    GetdiscountsComponent,
    BookingflightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
