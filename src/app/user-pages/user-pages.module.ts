import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormModule } from '../forms/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserPagesModule { }
