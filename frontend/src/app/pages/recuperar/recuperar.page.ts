import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  // Titulo pagina.
  Title = 'Recuperar Contraseña';
  // contenedor para realizar update.
  usaurio: any = [];

  constructor(
    private userServices: UsersService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}
  async crearToast(mensaje: string, duracion: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
    });
    toast.present();
  }

  CambiarPass(email) {
    this.userServices.getUserMail(email.value).subscribe((res) => {
      this.usaurio = res;
      if (this.usaurio[0] == undefined) {
        this.crearToast('Correo No Existe', 3000);
      } else {
        this.userServices
          .updateUserPass(this.usaurio[0].id, {
            fName: this.usaurio[0].fName,
            lName: this.usaurio[0].lName,
            uMail: this.usaurio[0].uMail,
            uPass: formatDate(
              this.usaurio[0].uBirth,
              'dd/MM/yyyy',
              'en-US',
              '-0400'
            ),
          })
          .subscribe(
            (update) => {
              this.crearToast(
                'Contraseña restablecida, Nueva Contraseña: Fecha Nacimiento formato. "dd/MM/yyy" ',
                3000
              );
            },
            (err) => this.crearToast('Correo No Existe', 3000)
          );
      }
    });
  }
}
