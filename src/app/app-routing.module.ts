import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Opcion1Component } from './components/opcion1/opcion1.component';
import { Opcion2Component } from './components/opcion2/opcion2.component';

const routes: Routes = [
{path: 'opcion1', component: Opcion1Component},
{path: 'opcion2', component: Opcion2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
