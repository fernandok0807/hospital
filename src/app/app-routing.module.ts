import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IntervencionComponent} from '../app/components/intervencion/intervencion.component'

const routes: Routes = [

   {path: 'intervencion',component: IntervencionComponent },
   {path: '',component: IntervencionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
