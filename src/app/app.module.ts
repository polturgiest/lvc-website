import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { MeanComponent } from './courses/mean/mean.component';
import { MernComponent } from './courses/mern/mern.component';
import { MevnComponent } from './courses/mevn/mevn.component';
import { JavaComponent } from './courses/java/java.component';
import { DotnetComponent } from './courses/dotnet/dotnet.component';
import { ViewComponent } from './gallery/view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NgIf } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoursesComponent,
    RegistrationComponent,
    HomeComponent,
    ContactUsComponent,
    GalleryComponent,
    MeanComponent,
    MernComponent,
    MevnComponent,
    JavaComponent,
    DotnetComponent,
    ViewComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routes,
    BrowserAnimationsModule,
    MaterialModule,
    NgIf,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
