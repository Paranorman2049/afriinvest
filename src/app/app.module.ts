import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeadComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about.component';
import { ServicesComponent } from './pages/services.component';
import { HireUsComponent } from './pages/hireus.component';
import { ContactUsComponent } from './pages/contactus.component';
import { HowToComponent } from './pages/howto.component';
import { LearnMoreComponent } from './pages/learnmore.component';
import { PageNotFoundComponent } from './pages/404.component';
import { ProjectComponent } from './pages/project.component';
import { appRoutes } from './routes';
import { FAQComponent } from './pages/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    HireUsComponent,
    ContactUsComponent,
    HowToComponent,
    LearnMoreComponent,
    ProjectComponent,
    FAQComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
