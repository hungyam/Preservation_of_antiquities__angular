import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {RegistComponent} from './regist/regist.component';
import {LogoutComponent} from './logout/logout.component';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {ReadPostComponent} from './read-post/read-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

const routes: Routes = [
  // {path: 'signin' , component: SigninComponent},
  {path: 'regist' , component: RegistComponent},
  {path: 'logout' , component: LogoutComponent},
  {path: 'home' , component: HomeComponent},
  // {path: 'readPost/:id' , component: ReadPostComponent},
  // {path: 'editPost/:id' , component: EditPostComponent},
  // {path: 'deletePost/:id' , component: DeletePostComponent},
  // {path: 'addPost' , component: AddPostComponent},
  {path: '' , redirectTo: 'regist', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
