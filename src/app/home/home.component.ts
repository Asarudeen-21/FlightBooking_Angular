import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  active = 1;
  constructor(private router: Router) { }

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
