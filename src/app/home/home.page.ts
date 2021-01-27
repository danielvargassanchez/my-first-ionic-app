import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from '../models/colors.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  colors: Color[];

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.getAll().subscribe((res) => {
      if (res) {
        this.colors = res.data;
      }
    }, error => {
      alert(error.error.error);
    })
  }

  show(id: number): void {
    this.router.navigate(['color', id]);
  }

}
