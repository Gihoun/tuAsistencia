import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Interface para la modificacionde usaurio.
export interface Usuario {
  id?: string;
  fName: string;
  lName: string;
  uMail: string;
  uPass: string;
  uBirth?: Date;
  user_rol?: any;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private client: HttpClient) {}

  // Ruta de la API
  API = 'http://localhost:1337/app-users';
  // Ruta libro asistencia.
  APIAsistencia = 'http://localhost:1337/asistencias';

  //METODOS CRUD

  //Lista solo de Usuarios con el Rol de alumnos.
  getAlumnos() {
    return this.client.get(this.API + '?user_rol.desc_Rol=Alumno');
  }
  //Lista todos los usuarios del sistema.
  getAllusers() {
    return this.client.get(this.API);
  }
  //Realiza un login
  getUser(email: String, pass: String) {
    return this.client.get(this.API + '?uMail=' + email + '&uPass=' + pass);
  }
  //Obtienes los datos de un usuario unico por id
  getUserprofile(id: String) {
    return this.client.get(this.API + '/' + id);
  }
  //registra nuevos alumnos
  createAlumnos(
    fName: string,
    lName: string,
    uMail: string,
    uPass: string,
    uBirth: Date,
    user_rol
  ) {
    return this.client.post(this.API, {
      fName,
      lName,
      uMail,
      uPass,
      uBirth,
      user_rol,
    });
  }
  //Eliminar alumno
  deleteAlumno(id: string) {
    return this.client.delete(`${this.API}/${id}`);
  }
  //
  getUserMail(uMail: string) {
    return this.client.get(this.API + '?uMail=' + uMail);
  }
  updateUserPass(id: string, usuario: Usuario) {
    return this.client.put(`${this.API}/${id}`, usuario);
  }

  // scanCreateList(userApp.id: string)
}
