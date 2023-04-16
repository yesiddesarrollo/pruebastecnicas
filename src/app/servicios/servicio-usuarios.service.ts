import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  url = "https://gorest.co.in/public/v1/users";

  constructor( private _http:HttpClient ) { }

  getUsers(){
    return this._http.get<any>( this.url );
  }

}
