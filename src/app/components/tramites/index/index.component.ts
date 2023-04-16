import { Component } from '@angular/core';
import { Tramite } from 'src/app/models/tramite-model';
import { ServicioTramitesService } from 'src/app/servicios/servicio-tramites.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  tramites:Tramite[] = [];

  constructor( private _servicio:ServicioTramitesService ) {

    this.getAll();  

  }

  getAll(){

    this._servicio.getTramites().subscribe( data => this.tramites = data );

  }

}
