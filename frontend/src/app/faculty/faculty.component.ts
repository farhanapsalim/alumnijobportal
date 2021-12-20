import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class LoginComponent implements OnInit {

user={uname:'',password:''}
  constructor(private _login:LoginService,
    private _router:Router,) { }

  ngOnInit(): void {
  }
loginUser(){
  this._login.loginUser(this.user)
   .subscribe(
    res => {
      localStorage.setItem('token', res.token)
      this._router.navigate(['/home'])
    },
    err => {
      console.log(err);
      this._router.navigate(['/home'])
    }
  ) 
}
}
