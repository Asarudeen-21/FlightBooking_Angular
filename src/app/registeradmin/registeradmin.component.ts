import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {

  myform: any;
  LoginID: any;
  FirstName: any;
  LastName: any;
  Gender: any;
  Age:any;
  EmailID: any;
  PhoneNumber: any;
  Password: any;
  Role: any;

  constructor(private router:Router, private _loginService: LoginService) 
  {

  }

  createControls()
  {
    this.LoginID = new FormControl('', Validators.required);
    this.FirstName = new FormControl('', Validators.required);
    this.LastName = new FormControl('', Validators.required);
    this.Gender = new FormControl('', Validators.required);
    this.Age = new FormControl('', Validators.required);
    this.EmailID = new FormControl('', Validators.required);
    this.PhoneNumber = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.Password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.Role = new FormControl('', Validators.required);
  }
  CreateForm()
  {
    this.myform = new FormGroup({LoginID: this.LoginID, FirstName: this.FirstName, LastName: this.LastName, 
      Gender: this.Gender, Age: this.Age, EmailID: this.EmailID, PhoneNumber: this.PhoneNumber, 
      Password: this.Password, Role: this.Role})
  }

  ngOnInit(): void 
  {
    this.createControls();
    this.CreateForm();
  }

  Register(data:any)
  {
    this._loginService.RegisterAdmin(data).subscribe
    ((result) => {
      if(result.message == "Registered")
      {
        alert("Your registration was successful.")
        this.router.navigate(['/login']);
      }
      else
      {
        alert(result.message);
      }
      });
    console.warn(data);
  }

}
