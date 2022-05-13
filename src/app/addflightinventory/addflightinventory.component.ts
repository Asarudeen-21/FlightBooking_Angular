import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-addflightinventory',
  templateUrl: './addflightinventory.component.html',
  styleUrls: ['./addflightinventory.component.css']
})
export class AddflightinventoryComponent implements OnInit {

  myform : any;
  //FlightNo: any;
  Airline: any;
  FlightSource: any;
  FlightDestination: any;
  StartTime: any;
  EndTime: any;
  ScheduledDays: any;
  BusinessClassSeats: any;
  GeneralSeats: any;
  Meals: any;
  Cost: any;
  FlightStatus: any;
  OnewayorRoundtrip: any;

  constructor(private router:Router, private _loginService: LoginService) 
  { }

  createControls()
  {
    //this.FlightNo = new FormControl('', Validators.required);
    this.Airline = new FormControl('', Validators.required);
    this.FlightSource = new FormControl('', Validators.required);
    this.FlightDestination = new FormControl('', Validators.required);
    this.StartTime = new FormControl('', Validators.required);
    this.EndTime = new FormControl('', Validators.required);
    this.ScheduledDays = new FormControl('', Validators.required);
    this.BusinessClassSeats = new FormControl('', Validators.required);
    this.GeneralSeats = new FormControl('', Validators.required);
    this.Meals = new FormControl('', Validators.required);
    this.Cost = new FormControl('', Validators.required);
    this.FlightStatus = new FormControl('', Validators.required);
    this.OnewayorRoundtrip = new FormControl('', Validators.required);
  }

  CreateForm()
  {
    this.myform = new FormGroup({ Airline: this.Airline, FlightSource: this.FlightSource, 
      FlightDestination: this.FlightDestination, StartTime: this.StartTime, EndTime: this.EndTime, ScheduledDays: this.ScheduledDays,
      BusinessClassSeats: this.BusinessClassSeats, GeneralSeats: this.GeneralSeats, Meals: this.Meals, Cost: this.Cost,
      FlightStatus: this.FlightStatus, OnewayorRoundtrip: this.OnewayorRoundtrip})
  }

  ngOnInit(): void 
  {
    this.createControls();
    this.CreateForm();
  }

  ScheduleAirline(data:any)
  {
    this._loginService.AddInventory(data).subscribe
    ((result) => {
      if(result.message == "Added")
      {
        alert("Flight inventory have been added successfully");
        this.router.navigate(['/adminhome']);
      }
      else
      {
        alert(result.message);
      }
      });
    console.warn(data);
  }

}
