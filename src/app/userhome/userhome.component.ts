import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  

  active = 1;

  constructor(private router: Router) 
  { }

  ngOnInit(): void 
  {
  }

  onClick()
  {
    localStorage.clear();
    alert("You have successfully logged out.")
    this.router.navigate(['/login']); 
  }

}
