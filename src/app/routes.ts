import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about.component';
import { ServicesComponent } from './pages/services.component';
import { HireUsComponent } from './pages/hireus.component';
import { ContactUsComponent } from './pages/contactus.component';
import { HowToComponent } from './pages/howto.component';
import { LearnMoreComponent } from './pages/learnmore.component';
import { PageNotFoundComponent } from './pages/404.component';
import { ProjectComponent } from './pages/project.component';
import { FAQComponent } from './pages/faq.component';
import { TermsComponent } from './pages/terms.component';
import { PolicyComponent } from './pages/policy.component';

export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'hireus', component: HireUsComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'howto', component: HowToComponent },
    { path: 'learnmore', component: LearnMoreComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'policy', component: PolicyComponent },
    { path: 'terms', component: TermsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
]