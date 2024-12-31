import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ServicesComponent } from './services/services.component';
import { ValuesComponent } from './values/values.component';
import { CarousellogoComponent } from './carousellogo/carousellogo.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,RouterOutlet,FooterComponent, NavbarComponent, HomeComponent,AboutComponent,ContactComponent,ConsultantsComponent, ServicesComponent, ValuesComponent, CarousellogoComponent,WhyChooseUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stage-test';
}
