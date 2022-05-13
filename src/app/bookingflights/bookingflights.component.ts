import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup,  } from '@angular/forms';
import { Booking } from '../models/admin';
import { ManagebookingsComponent } from '../managebookings/managebookings.component';
import { AvailableflightsComponent } from '../availableflights/availableflights.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-bookingflights',
  templateUrl: './bookingflights.component.html',
  styleUrls: ['./bookingflights.component.css']
})
export class BookingflightsComponent implements OnInit {

  bookTicket: Booking = new Booking();
  myform : any;
  NumberOfSeats : any;
  PassengerDetails : any;
  MealPreference : any;
  ApplyCoupon : any;

  constructor(private router:Router, private _loginService: LoginService) { }

  createControls()
  {
    this.NumberOfSeats = new FormControl('', Validators.required);
    this.PassengerDetails = new FormControl('', Validators.required);
    this.MealPreference = new FormControl('', Validators.required);
    this.ApplyCoupon = new FormControl('');
  }
  CreateForm()
  {
    this.myform = new FormGroup({NumberOfSeats: this.NumberOfSeats, PassengerDetails: this.PassengerDetails, 
      MealPreference: this.MealPreference, ApplyCoupon: this.ApplyCoupon})
  }

  ngOnInit(): void 
  {
    this.createControls()
    this.CreateForm()
  }

  Book(data:any)
  {
    this.bookTicket.EmailID = LoginComponent.currentLoginInfo.EmailID;
    this.bookTicket.NumberOfSeats = data.NumberOfSeats;
    this.bookTicket.FlightNo = AvailableflightsComponent.selectedFlightDetails.flightNo;
    this.bookTicket.FlightName = AvailableflightsComponent.selectedFlightDetails.airline;
    this.bookTicket.FlightSource = AvailableflightsComponent.selectedFlightDetails.flightSource;
    this.bookTicket.FlightDestination = AvailableflightsComponent.selectedFlightDetails.flightDestination;
    this.bookTicket.StartTime = AvailableflightsComponent.selectedFlightDetails.startTime;
    this.bookTicket.EndTime = AvailableflightsComponent.selectedFlightDetails.endTime;
    this.bookTicket.PassengerDetails = data.PassengerDetails;
    this.bookTicket.MealPreference = data.MealPreference ;
    this.bookTicket.PNR = "";
    this.bookTicket.Status = "Available";
    this.bookTicket.ApplyCoupon = data.ApplyCoupon;

    this._loginService.BookTickets(this.bookTicket).subscribe
    ((result) => {
      if(result.message == "Reserved")
      {
        alert("Your tickets have been successfully reserved");
        this.router.navigate(['/userhome']);
      }
      else
      {
        alert(result.message);
      }
      });
    // console.warn(data);
  }

  // Cancel()
  // {
  //   this.router.navigate(['/userhome#three']);
  // }

}
