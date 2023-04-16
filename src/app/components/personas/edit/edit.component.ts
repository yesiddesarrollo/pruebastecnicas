import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona-model';
import { ServicioPersonasService } from 'src/app/servicios/servicio-personas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona:Persona = new Persona();
  
  constructor(private _router:Router, private _service:ServicioPersonasService){}
    
  ngOnInit() {
  
    this.getEdit();

  }

  getEdit(){

    let id=localStorage.getItem("id");

    this._service.getPersonaById(+id!)
                    .subscribe(data=>{
                        this.persona = data;
                    });
  }

  Edit(){
    
    this._service.updatePersona(this.persona)
                 .subscribe(() => this._router.navigate(["index"]));
  }

}
