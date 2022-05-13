import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-addairlines',
  templateUrl: './addairlines.component.html',
  styleUrls: ['./addairlines.component.css']
})
export class AddairlinesComponent implements OnInit {

  myform : any;
  FlightName : any;
  Contact : any;
  Address : any;

  constructor(private router:Router, private _loginService: LoginService) { }

  createControls()
  {
    this.FlightName = new FormControl('', Validators.required);
    this.Contact = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.Address = new FormControl('', [Validators.required, Validators.minLength(3)]);
  }
  CreateForm()
  {
    this.myform = new FormGroup({FlightName: this.FlightName, Contact: this.Contact, Address: this.Address})
  }

  ngOnInit(): void 
  {
    this.createControls()
    this.CreateForm()
  }

  AddAirline(data:any)
  {
    this._loginService.RegisterAirlines(data).subscribe
    ((result) => {
      if(result.message == "Registered")
      {
        alert("Airlines have been successfully registered");
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
