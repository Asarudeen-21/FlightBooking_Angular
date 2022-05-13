import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup,  } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-adddiscounts',
  templateUrl: './adddiscounts.component.html',
  styleUrls: ['./adddiscounts.component.css']
})
export class AdddiscountsComponent implements OnInit {
  myform : any;
  CouponCode : any;
  DiscountValue : any;

  constructor(private router:Router, private _loginService: LoginService) { }

  createControls()
  {
    this.CouponCode = new FormControl('', Validators.required);
    this.DiscountValue = new FormControl('', Validators.required);
  }
  CreateForm()
  {
    this.myform = new FormGroup({CouponCode: this.CouponCode, DiscountValue: this.DiscountValue})
  }

  ngOnInit(): void 
  {
    this.createControls()
    this.CreateForm()
  }

  AddDiscount(data:any)
  {
    this._loginService.AddDiscounts(data).subscribe
    ((result) => {
      if(result.message == "Added")
      {
        alert("Discounts have been added successfully");
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
