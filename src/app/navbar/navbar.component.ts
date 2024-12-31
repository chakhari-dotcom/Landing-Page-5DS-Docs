import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ValuesComponent } from '../values/values.component';
import { ConsultantsComponent } from '../consultants/consultants.component';
import { ContactComponent } from '../contact/contact.component';
import { ServicesComponent } from '../services/services.component';
import { NgModule } from '@angular/core';
import smoothScroll from 'smooth-scroll';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ FormsModule,CommonModule ,RouterModule, AboutComponent, ValuesComponent, ConsultantsComponent,ContactComponent, ServicesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  selectedTab: string = 'home'; // Default active tab

  selectTab(tab: string): void {
    this.selectedTab = tab;
} 

private scroll: smoothScroll;

  constructor() {
    // Initialisation de SmoothScroll avec les options globales
    this.scroll = new smoothScroll(undefined, {
       // Durée en millisecondes
      easing: 'easeInOutCubic' // Courbe d'accélération
    });
  }

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault(); // Empêche l’ajout de l’ID dans l’URL
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Récupère la position de l'élément
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

      // Définir un offset (marge, par exemple pour la hauteur de la navbar)
      const offset = 130; // Remplacez par la hauteur exacte de votre navbar ou tout autre décalage

      // Faire défiler avec offset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth' // Défilement fluide
      });
    }
  }
}

