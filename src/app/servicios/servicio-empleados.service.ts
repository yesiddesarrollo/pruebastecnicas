import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empleado } from '../models/empleado-model';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  url = 'http://localhost:8080/Backend-prueba-tecnica/empleados';

  constructor( private _http:HttpClient ) { }

  getEmpleados(){
    return this._http.get<Empleado[]>( this.url );
  }

  addEmpleado( empleado:Empleado ){
    return this._http.post<Empleado>( this.url, empleado )
  }

  getEmpleadoById( id:number ){
    return this._http.get<Empleado>(  this.url + "/" + id );
  }

  updateEmpleado( empleado:Empleado ){
    return this._http.put<Empleado>( this.url + "/" + empleado.id, empleado );
  }

}
