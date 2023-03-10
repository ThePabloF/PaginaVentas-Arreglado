import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';




const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
  
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];



@NgModule({


  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
