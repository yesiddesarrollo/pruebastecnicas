import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/personas/create/create.component';
import { EditComponent } from './components/personas/edit/edit.component';
import { IndexComponent } from './components/personas/index/index.component';
import { CreateComponent as CreateEmpleadoComponent } from './components/empleados/create/create.component';
import { EditComponent as EditEmpleadoComponent } from './components/empleados/edit/edit.component';
import { IndexComponent as IndexEmpleadoComponent } from './components/empleados/index/index.component';
import { CreateComponent as CreateTramiteComponent } from './components/tramites/create/create.component';
import { IndexComponent as IndexTramiteComponent } from './components/tramites/index/index.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'personasIndex',component:IndexComponent},
  {path:'personasCreate', component:CreateComponent},
  {path:'personasEdit', component:EditComponent},

  {path:'empleadosIndex',component:IndexEmpleadoComponent},
  {path:'empleadosCreate', component:CreateEmpleadoComponent},
  {path:'empleadosEdit', component:EditEmpleadoComponent},

  {path:'tramitesIndex',component:IndexTramiteComponent},
  {path:'tramitesCreate', component:CreateTramiteComponent},
  
  {path:'users', component:UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
