import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona-model';
import { ServicioPersonasService } from 'src/app/servicios/servicio-personas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  personas:Persona[] = [];

  constructor(private _router:Router, private _servicio:ServicioPersonasService ) {
    console.log('ok');
    this.getAll();  

  }

  getAll(){

    this._servicio.getPersonas().subscribe( data => this.personas = data );

  }

  navigateToEdit( persona:Persona ){

    localStorage.setItem("id",persona.id?.toString()!);
    this._router.navigate(["edit"]);
  }

}
