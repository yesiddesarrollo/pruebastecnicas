import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona-model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonasService {

  url = 'http://localhost:8080/Backend-prueba-tecnica/personas';

  constructor( private _http:HttpClient ) { }

  getPersonas(){
    return this._http.get<Persona[]>( this.url );
  }

  addPersona( persona:Persona ){
    return this._http.post<Persona>( this.url,persona )
  }

  getPersonaById( id:number ){
    return this._http.get<Persona>(  this.url + "/" + id );
  }

  updatePersona( persona:Persona ){
    return this._http.put<Persona>( this.url + "/" + persona.id, persona );
  }
}
