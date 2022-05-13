import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availableflights',
  templateUrl: './availableflights.component.html',
  styleUrls: ['./availableflights.component.css']
})
export class AvailableflightsComponent implements OnInit {

  inventories: any = [];
  static selectedFlightDetails : any=[];
  airline:any;
  p: number = 1;  

  constructor(private router:  Router, private _loginService: LoginService) { }

  ngOnInit(): void 
  {
    this.SearchedItems();
  }

  SearchedItems() 
  {
    this.inventories = SearchComponent.flights;
  }

  BookTicket(data:any)
  {
    AvailableflightsComponent.selectedFlightDetails = data;
    this.router.navigate(['/bookingflights']);
  }

  key: string = "flightNo";
  reverse: boolean = false;
  sort(key: string) 
  {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
