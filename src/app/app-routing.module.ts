import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3Component } from './d3/d3.component';

const routes: Routes = [
  {path: 'home', component: D3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
