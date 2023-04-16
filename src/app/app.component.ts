import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-tecnica';

  constructor(private _router:Router){}

  personas(){
    this._router.navigate(["personasIndex"])
  }

  nuevaPersona(){
    this._router.navigate(["personasCreate"])
  }

  empleados(){
    this._router.navigate(["empleadosIndex"])
  }

  nuevoEmpleado(){
    this._router.navigate(["empleadosCreate"])
  }

  tramites(){
    this._router.navigate(["tramitesIndex"])
  }

  nuevoTramite(){
    this._router.navigate(["tramitesCreate"])
  }

  usuarios(){
    this._router.navigate(["users"])
  }

}
