import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CreateComponent } from './components/personas/create/create.component';
import { EditComponent } from './components/personas/edit/edit.component';
import { IndexComponent } from './components/personas/index/index.component';

import { CreateComponent as CreateEComponent } from './components/empleados/create/create.component';
import { EditComponent as EditEComponent  } from './components/empleados/edit/edit.component';
import { IndexComponent as IndexEComponent } from './components/empleados/index/index.component';

import { CreateComponent as CreateTComponent } from './components/tramites/create/create.component';
import { IndexComponent as IndexTComponent } from './components/tramites/index/index.component';

import { UsersComponent } from './components/users/users.component';

import { ServicioEmpleadosService } from './servicios/servicio-empleados.service';
import { ServicioPersonasService } from './servicios/servicio-personas.service';
import { ServicioTramitesService } from './servicios/servicio-tramites.service';
import { ServicioUsuariosService } from './servicios/servicio-usuarios.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    CreateEComponent,
    EditEComponent,
    IndexEComponent,
    CreateTComponent,
    IndexTComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicioPersonasService, 
              ServicioEmpleadosService,
              ServicioTramitesService,
              ServicioUsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
