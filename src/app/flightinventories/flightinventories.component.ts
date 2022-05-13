import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-flightinventories',
  templateUrl: './flightinventories.component.html',
  styleUrls: ['./flightinventories.component.css']
})
export class FlightinventoriesComponent implements OnInit {

  inventories: any = [];
  airline:any;
  p: number = 1;  

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void 
  {
    this.FlightInventories();
  }

  FlightInventories() 
  {
    this._loginService.GetInventoryList().subscribe(data => 
      {
        this.inventories = data;
      });
  }

   

    BlockFlights(data:number)
    {
     this._loginService.BlockAirline(data).subscribe((result) => {
       if(result.message == "Blocked")
       {
        alert("Flight " + data.toString() + " have been blocked successfully");
        this.FlightInventories();
       }
       else
       {
        alert(result.message);
       }
     });
    }

    ActiveFlights(data:number)
    {
     this._loginService.ActiveAirline(data).subscribe((result) => {
       if(result.message == "Active")
       {
        alert("Flight " + data.toString() + " have been activated successfully");
        this.FlightInventories();
       }
       else
       {
          alert(result.message);
       }
     });
    }

    Search()
    {
      if(this.airline == "")
      {
        this.ngOnInit();
      }
      else
      {
        this.inventories = this.inventories.filter((res: any ) => {
          return res.airline.toLocaleLowerCase().match(this.airline.toLocaleLowerCase())
        })
      }
    }

    key: string = "flightNo";
    reverse: boolean = false;
    sort(key: string) 
    {
      this.key = key;
      this.reverse = !this.reverse;
    }
}
