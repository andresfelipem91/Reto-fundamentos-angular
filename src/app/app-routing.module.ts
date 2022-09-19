import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormunlarioComponent } from './register/formunlario/formunlario.component';


const routes: Routes = [
  {
    path: 'register1',
    component: FormunlarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
