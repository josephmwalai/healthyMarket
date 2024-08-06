import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    userName: '',
    password: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    if (
      this.loginObj.userName == 'admin' &&
      this.loginObj.password === '112233'
    ) {
      this.router.navigateByUrl('/products');
    } else {
      alert('Check Your Credentials!!!');
    }
  }
}
