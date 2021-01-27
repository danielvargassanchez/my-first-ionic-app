import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from '../models/colors.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {

  constructor(private route: ActivatedRoute, private readonly serviceColor: LoginService) { }

  color: Color;

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      if (parameters.id) {
        this.serviceColor.getById(parameters.id).subscribe(response => {
          this.color = response.data;
        }, error => {
          alert(error.error.error);
        });
      }
    });
  }

}
