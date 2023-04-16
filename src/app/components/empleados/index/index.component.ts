import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado-model';
import { ServicioEmpleadosService } from 'src/app/servicios/servicio-empleados.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  
  empleados: Empleado[] = [];

  constructor(private _router:Router, private _servicio:ServicioEmpleadosService ) {

    this.getAll();  

  }

  getAll(){

    this._servicio.getEmpleados().subscribe( data => this.empleados = data );

  }

  navigateToEdit( empleado:Empleado ){

    localStorage.setItem("id", empleado.id?.toString()!);
    this._router.navigate(["edit"]);
  }
}
