import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JavaComponent } from './courses/java/java.component';
import { DotnetComponent } from './courses/dotnet/dotnet.component';
import { MeanComponent } from './courses/mean/mean.component';
import { MernComponent } from './courses/mern/mern.component';
import { MevnComponent } from './courses/mevn/mevn.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/java', component: JavaComponent },
    { path: 'courses/dotnet', component: DotnetComponent },
    { path: 'courses/mean', component: MeanComponent },
    { path: 'courses/mern', component: MernComponent },
    { path: 'courses/mevn', component: MevnComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
  ];
  
export const routes = RouterModule.forRoot(router);

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forRoot(router),
    ]
  })
  export class AppRoutingModule { }
  