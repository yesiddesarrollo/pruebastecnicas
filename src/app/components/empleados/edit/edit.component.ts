import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado-model';
import { ServicioEmpleadosService } from 'src/app/servicios/servicio-empleados.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  empleado:Empleado = new Empleado();
  
  constructor(private _router:Router, private _service:ServicioEmpleadosService){}
    
  ngOnInit() {
  
    this.getEdit();

  }

  getEdit(){

    let id=localStorage.getItem("id");

    this._service.getEmpleadoById(+id!)
                    .subscribe(data=>{
                        this.empleado = data;
                    });
  }

  Edit(){
    
    this._service.updateEmpleado(this.empleado)
                 .subscribe(() => this._router.navigate(["index"]));
  }

}
