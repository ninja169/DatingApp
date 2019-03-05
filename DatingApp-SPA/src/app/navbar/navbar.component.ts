import { AuthService } from './../_services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  model:any = {};
  
  constructor(private http:HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model)
    .subscribe(next => {
      console.log('Logged in sucessfully');
    }, error => console.log('Failed to login'));
  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return !!token;
  }

  loggedOut(){
    localStorage.removeItem("token");
    console.log('logged out');
  }
}
