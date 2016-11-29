import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private errors = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit(email, password) {
    this.auth.login(email, password).subscribe(
      result => {
        this.router.navigate(['/projects']);
      },
      err => {
        this.errors = err;
      });
  }
}
