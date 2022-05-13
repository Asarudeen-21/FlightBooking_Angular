import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-managebookings',
  templateUrl: './managebookings.component.html',
  styleUrls: ['./managebookings.component.css']
})
export class ManagebookingsComponent implements OnInit {

  bookings: any = [];
  pnr:any;
  p1: number = 1;  

  constructor(private _loginService: LoginService) 
  { }

  ngOnInit(): void 
  {
    this.Bookings();
  }

  Bookings() 
  {
    this._loginService.GetBookings(LoginComponent.currentLoginInfo.EmailID).subscribe(data => 
      {
        this.bookings = data;
      });
  }

  CancelTicket(data:any)
  {
   this._loginService.CancelBookings(data).subscribe((result) => {
     if(result.message == "Cancelled")
     {
      alert("Your tickets have been successfully cancelled");
      this.Bookings();
     }
     else
     {
      alert(result.message);
     }
   });
  }

  Search()
    {
      if(this.pnr == "")
      {
        this.ngOnInit();
      }
      else
      {
          this.bookings = this.bookings.filter((res: any ) => {
          return res.pnr.toLocaleLowerCase().match(this.pnr.toLocaleLowerCase())
        })
      }
    }

    key: string = "emailID";
    reverse: boolean = false;
    sort(key: string) 
    {
      this.key = key;
      this.reverse = !this.reverse;
    }

}
