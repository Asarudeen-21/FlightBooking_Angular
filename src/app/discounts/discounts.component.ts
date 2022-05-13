import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

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

    DeleteDiscounts(code: string) 
    {
        this._loginService.DeleteDiscounts(code).subscribe(data => {
          if(data.message == "CouponDeleted")
          {
            alert("Discounts have been successfully removed.")
            this.Discounts();
          }
          else
          {
            alert(data.message);
          }
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
