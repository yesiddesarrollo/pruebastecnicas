import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado-model';
import { Persona } from 'src/app/models/Persona-model';
import { Tramite } from 'src/app/models/tramite-model';
import { ServicioEmpleadosService } from 'src/app/servicios/servicio-empleados.service';
import { ServicioPersonasService } from 'src/app/servicios/servicio-personas.service';
import { ServicioTramitesService } from 'src/app/servicios/servicio-tramites.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit  {

  tramite:Tramite = new Tramite();
  personas:Persona[] = [];
  empleados:Empleado[] = [];

  constructor( private _router:Router, private _servicio:ServicioTramitesService,
              private _servicioPersonas:ServicioPersonasService,
              private _servicioEmpleados:ServicioEmpleadosService   ) {}

  ngOnInit(): void {

    this._servicioPersonas.getPersonas().subscribe(data => this.personas = data);

    this._servicioEmpleados.getEmpleados().subscribe(data => this.empleados = data);

  }

  save(numeroRadicado:String,
        nombre:String, 
        descripcion: String,
        idPersona: number,
        idEmpleado: number){    

    this.tramite.numeroRadicado = numeroRadicado;
    this.tramite.nombre = nombre;
    this.tramite.descripcion = descripcion;
    this.tramite.idPersona = idPersona;
    this.tramite.idEmpleado = idEmpleado;

    this._servicio.addTramite(this.tramite)
                  .subscribe(data =>{
                    this._router.navigate(["index"]);
                  });
  }
  
}
