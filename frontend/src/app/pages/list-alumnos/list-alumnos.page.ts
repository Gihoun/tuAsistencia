import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.page.html',
  styleUrls: ['./list-alumnos.page.scss'],
})
export class ListAlumnosPage implements OnInit {
  // Titulo de la pagina.
  Title = 'Lista de Alumnos';
  // Lista de Alumnos.
  usuarios: any = [];
  // Carga de la Lista de alumnos.
  ListAlumnos() {
    this.uService.getAlumnos().subscribe((res) => {
      this.usuarios = res;
    });
  }

  constructor(private uService: UsersService, private navCtrl: NavController) {}

  ngOnInit() {
    this.ListAlumnos();
  }

}
