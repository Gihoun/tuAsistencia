import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private client: HttpClient) {}

  // Ruta de la API
  API = 'http://localhost:1337/app-users';

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
  //Obtienes los datos de un usuario unico
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
}
