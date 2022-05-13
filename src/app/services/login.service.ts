import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Booking } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  newURL: string;
  constructor(private http: HttpClient) 
  {
    
  }

  url = "http://localhost:9000/";

  headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');  

  Login(data : any) : Observable<any>
  {  

    return this.http.post(this.url+'login', data, {'headers' : this.headers});
  }  

  Authenticate(data : any) : Observable<any>
  {  

    return this.http.post(this.url+'Authenticate', data, {'headers' : this.headers});
  }  

  GetAdmin(): Observable<any>
  {
    this.newURL = this.url + 'GetAdmin';
    console.log(this.newURL);
    return this.http.get(this.newURL);
  }

  RegisterAdmin(data: any) : Observable<any>
  {
    return this.http.post(this.url+'AdminRegistration', data, {'headers' : this.headers});
  }

  AddInventory(data:any) : Observable<any>
  {
    return this.http.post(this.url+'AddInventory', data, {'headers' : this.headers});
  }

  GetInventoryList() : Observable<any>
  {
    this.newURL =  this.url + 'Inventories';
    console.log(this.newURL);
    return this.http.get(this.newURL);
  }

  BlockAirline(data: number): Observable<any>
  { 
    return this.http.put(this.url + 'blockairlines?id=' + data.toString() + '&isActive=false' , {'headers' : this.headers});
  }

  ActiveAirline(data: number): Observable<any>
  { 
    return this.http.put(this.url + 'blockairlines?id=' + data.toString() + '&isActive=true' , {'headers' : this.headers});
  }

  GetAirlines() : Observable<any>
  {
    this.newURL =  this.url + 'GetAirlines';
    console.log(this.newURL);
    return this.http.get(this.newURL);
  }

  deleteAirlines(airline: string): Observable<any>
  {
    this.newURL =  this.url + 'Delete?flightName=' + airline;
    console.log(this.newURL);
    return this.http.delete(this.newURL);
  }

  RegisterAirlines(data: any) : Observable<any>
  {
    return this.http.post(this.url+'addingairlines', data, {'headers' : this.headers});
  }

  AddDiscounts(data: any): Observable<any>
  {
    return this.http.post(this.url+'AddDiscount', data, {'headers' : this.headers});
  }

  GetDiscounts() : Observable<any>
  {
    return this.http.get(this.url + 'GetDiscounts' );
  }

  DeleteDiscounts(couponCode: string): Observable<any>
  {
    return this.http.delete(this.url + 'DeleteDiscount?couponCode=' + couponCode);
  }

  SearchAirlines(data: any)
  {
    this.newURL =  this.url +'searchflights?source=' + data.source + '&destination=' + data.destination + '&onewayorRoundtrip=' + data.onewayorRoundtrip;
    return this.http.get(this.newURL);
  }

  GetBookings(data:string) : Observable<any>
  {
    return this.http.get(this.url + 'TicketHistory?emailID=' + data);
    //return this.http.get(this.url + 'history?emailID=' + data);
  }

  CancelBookings(data: any) : Observable<any>
  {
    return this.http.delete(this.url + 'CancelTicket?pnr=' + data); 
    //return this.http.delete(this.url + 'cancel?pnr=' + data); 
  }

  BookTickets(data: Booking) : Observable<any>
  {
    return this.http.post(this.url+'Booking', data, {'headers' : this.headers});
  }
}
