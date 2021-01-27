import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private readonly router: Router) {

    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit() {
  }

  login(): void {
    const data: LoginRequest = new LoginRequest();
    data.email = this.formLogin.get("email").value;
    data.password = this.formLogin.get("password").value;

    this.loginService.login(data).subscribe((res) => {
      if (res.token) {
        this.router.navigate(['home']);
      }
    }, error => {
      alert(error.error.error);
    })
  }
}
