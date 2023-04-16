import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { ServicioUsuariosService } from 'src/app/servicios/servicio-usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private _servicio:ServicioUsuariosService ){}

  users:User[] = [];

  ngOnInit(): void {
  
    this._servicio.getUsers().subscribe(data => this.users = data.data);

  }

}
