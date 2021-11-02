import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.page.html',
  styleUrls: ['./estudiante-add.page.scss'],
})
export class EstudianteAddPage implements OnInit {
  Title = 'Formulario de Registro.';
  rol = 2;
  user: any = [];
  constructor(private uService: UsersService, private router: Router,public alertCtrl: AlertController) {}

  ngOnInit() {}
  addEstudiante(firstName, lastName, uMail, birth, pass) {
    this.uService
      .createAlumnos(
        firstName.value,
        lastName.value,
        uMail.value,
        birth.value,
        pass.value,
        this.rol
      )
      .subscribe(
        (res) =>{
        this.user = res;
        if(this.user.fName == ""){
          this.failCreate();
      }else {
        this.successCreate();
        this.router.navigate(["/home"]);
      }
        },             
        (err) => {this.failCreate();}
      );
  }

  async successCreate() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Exito',
      message: 'Cuenta creada con exito',
      buttons: ['OK']
    });

    await alert.present();
    await alert.onDidDismiss();
  }
  async failCreate() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Error!!!',
      message: 'Al enviar el formulario.',
      buttons: ['OK']
    });

    await alert.present();
    await alert.onDidDismiss();
  }

}
