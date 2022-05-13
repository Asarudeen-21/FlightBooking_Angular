import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform : any;
  EmailID: any;
  Password : any;
  Role: any;
  static currentLoginInfo : any ;

  constructor(private router:Router, private _loginService: LoginService) 
  {
    localStorage.setItem('token', "dummy" );

   }

  createControls()
  {
    this.EmailID =  new FormControl('', Validators.required);
    //this.EmailID =  new FormControl('', [Validators.required, Validators.pattern("[^@]*@[^@]")]);
    this.Password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.Role =  new FormControl('', Validators.required);
  }
  CreateForm()
  {
    this.myform = new FormGroup({EmailID: this.EmailID, Password: this.Password, Role: this.Role})
  }

  ngOnInit(): void 
  {
    this.createControls();
    this.CreateForm();
  }

  onSubmit(data: any)
  {
    this._loginService.Authenticate(data).subscribe(
      (result) => {
        console.log(result);
        if(result.message != "Unauthorized")
        {
          LoginComponent.currentLoginInfo = data;
          alert("You have successfully logged in.")
          localStorage.setItem('token', result.message )
          if(data.Role == "Admin")
          {
            this.router.navigate(['/adminhome']);
          }
          else
          {
            this.router.navigate(['/userhome']);
          }
        }
        else
        {
          alert(result.message);
        }
      }
    );   
  }

}
