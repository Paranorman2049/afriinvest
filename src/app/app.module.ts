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
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    HireUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
