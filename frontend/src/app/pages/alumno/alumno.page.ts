import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})


export class AlumnoPage implements OnInit {
  
  usuario: any = [];

  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.queryParams.subscribe((params) => {
      this.usuario = JSON.parse(params.userlogin);
    });
  }

  ngOnInit() {
    
  }
}
