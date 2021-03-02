import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {RegistComponent} from './regist/regist.component';
import {LogoutComponent} from './logout/logout.component';


const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'regist', component: RegistComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', redirectTo: 'signin' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
