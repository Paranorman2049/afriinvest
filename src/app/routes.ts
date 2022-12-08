import  {Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about.component';
import { ServicesComponent } from './pages/services.component';
import { HireUsComponent } from './pages/hireus.component';
import { ContactUsComponent } from './pages/contactus.component';


export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'hire', component: HireUsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]