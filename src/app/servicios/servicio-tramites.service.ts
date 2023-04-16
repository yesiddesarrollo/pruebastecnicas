import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tramite } from '../models/tramite-model';

@Injectable({
  providedIn: 'root'
})
export class ServicioTramitesService {

  url = 'http://localhost:8080/Backend-prueba-tecnica/tramites';

  constructor( private _http:HttpClient ) { }

  getTramites(){
    return this._http.get<Tramite[]>( this.url );
  }

  addTramite( tramite:Tramite ){
    return this._http.post<Tramite>( this.url, tramite )
  }

}
