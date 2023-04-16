import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado-model';
import { ServicioEmpleadosService } from 'src/app/servicios/servicio-empleados.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  empleado:Empleado = new Empleado();

  constructor( private _router:Router, private _servicio:ServicioEmpleadosService ) {}

  save(numeroIdentificacion:number,
        nombres:String, 
        apellidos: String,
        dependencia: String,
        fechaIngreso: String){    

    this.empleado.numeroIdentificacion = numeroIdentificacion;
    this.empleado.nombres = nombres;
    this.empleado.apellidos = apellidos;
    this.empleado.dependencia = dependencia;
    this.empleado.fechaIngreso = fechaIngreso;

    this._servicio.addEmpleado(this.empleado)
                  .subscribe(data =>{
                    this._router.navigate(["empleadosIndex"]);
                  });
  }

}
