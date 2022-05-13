import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myform : any;
  source : any;
  destination : any;
  onewayorRoundtrip : any;
 
  static flights: any = [];

  constructor(private router:Router, private _loginService: LoginService) { }

  createControls()
  {
    this.source = new FormControl('', Validators.required);
    this.destination = new FormControl('', Validators.required);
    this.onewayorRoundtrip = new FormControl('', Validators.required);;
  }
  CreateForm()
  {
    this.myform = new FormGroup({source: this.source, destination: this.destination, onewayorRoundtrip: this.onewayorRoundtrip})
  }

  ngOnInit(): void 
  {
    this.createControls()
    this.CreateForm()
  }

  SearchAirline(data:any)
  {
    this._loginService.SearchAirlines(data).subscribe
    ((result) => {
      if(result != null)
      {
        console.log(result);
        console.log(result.toString());
        SearchComponent.flights = result;
        this.router.navigate(['/availableflights']);
        
      }
      else
      {
        alert("Flight isn't available");
      }
      });
  }


}
