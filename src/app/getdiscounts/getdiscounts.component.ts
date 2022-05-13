import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-getdiscounts',
  templateUrl: './getdiscounts.component.html',
  styleUrls: ['./getdiscounts.component.css']
})
export class GetdiscountsComponent implements OnInit {

  discounts: any = [];
  couponCode:any;
  p: number = 1;  

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void 
  {
    this.Discounts();
  }

  Discounts() 
  {
    this._loginService.GetDiscounts().subscribe(data => 
      {
        this.discounts = data;
      });
  }

  Search()
    {
      if(this.couponCode == "")
      {
        this.ngOnInit();
      }
      else
      {
        this.discounts = this.discounts.filter((res: any ) => {
          return res.couponCode.toLocaleLowerCase().match(this.couponCode.toLocaleLowerCase())
        })
      }
    }

    key: string = "couponCode";
    reverse: boolean = false;
    sort(key: string) 
    {
      this.key = key;
      this.reverse = !this.reverse;
    }

}
