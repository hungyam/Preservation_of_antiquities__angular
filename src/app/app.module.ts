import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegistComponent } from './regist/regist.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { ReadPostComponent } from './read-post/read-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegistComponent,
    LogoutComponent,
    HomeComponent,
    AddPostComponent,
    EditPostComponent,
    DeletePostComponent,
    ReadPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
