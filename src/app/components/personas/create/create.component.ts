import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona-model';
import { ServicioPersonasService } from 'src/app/servicios/servicio-personas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  persona:Persona = new Persona();

  constructor( private _router:Router, private _servicio:ServicioPersonasService ) {}

  save(idTipoIdentificacion:String,
        numeroIdentificacion:number,
        nombres:String, 
        apellidos: String,
        telefono: String,
        direccion: String,
        correo: String){    


    this.persona.idTipoIdentificacion = +idTipoIdentificacion;
    this.persona.numeroIdentificacion = numeroIdentificacion;
    this.persona.nombres = nombres;
    this.persona.apellidos = apellidos;
    this.persona.telefono = telefono;
    this.persona.direccion = direccion;
    this.persona.correo = correo;

    

    this._servicio.addPersona(this.persona)
                  .subscribe(data =>{
                    this._router.navigate(["personasIndex"]);
                  });
                  
  }

}
