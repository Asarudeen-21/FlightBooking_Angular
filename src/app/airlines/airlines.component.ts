import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  users: any = [];
  flightName:any;
  p: number = 1;  

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void 
  {
    this.Flights();
  }

  Flights() 
  {
    this._loginService.GetAirlines().subscribe(data => 
      {
        this.users = data;
      });
  }

    DeleteFlights(airline: string) 
    {
        this._loginService.deleteAirlines(airline).subscribe(data => {
          if(data.message == "Deleted")
          {
            alert("Airlines have been successfully removed.")
            this.Flights();
          }
        });
    }

    Search()
    {
      if(this.flightName == "")
      {
        this.ngOnInit();
      }
      else
      {
        this.users = this.users.filter((res: any ) => {
          return res.flightName.toLocaleLowerCase().match(this.flightName.toLocaleLowerCase())
        })
      }
    }

    key: string = "flightName";
    reverse: boolean = false;
    sort(key: string) 
    {
      this.key = key;
      this.reverse = !this.reverse;
    }

}
