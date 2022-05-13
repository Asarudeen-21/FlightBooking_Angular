import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddairlinesComponent } from './addairlines/addairlines.component';
import { AdddiscountsComponent } from './adddiscounts/adddiscounts.component';
import { AddflightinventoryComponent } from './addflightinventory/addflightinventory.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { AvailableflightsComponent } from './availableflights/availableflights.component';
import { BookingflightsComponent } from './bookingflights/bookingflights.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './shared/auth.guard';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'  },  
  {path:'login', component:LoginComponent},
  {path:'registeradmin', component: RegisteradminComponent},
  {path:'addairlines', component:AddairlinesComponent, canActivate:[AuthGuard]},
  {path:'addinventory', component:AddflightinventoryComponent, canActivate:[AuthGuard]},
  {path:'adminhome', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'adddiscounts', component:AdddiscountsComponent, canActivate:[AuthGuard]},
  {path:'availableflights', component:AvailableflightsComponent, canActivate:[AuthGuard]},
  {path:'bookingflights', component:BookingflightsComponent, canActivate:[AuthGuard]},
  {path:'userhome', component:UserhomeComponent, canActivate:[AuthGuard]},
  {path:'**',  redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
