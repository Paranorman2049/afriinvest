import  {Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about.component';
import { ServicesComponent } from './pages/services.component';
import { HireusComponent } from './pages/hireus.component';


export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'hireus', component: HireusComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]