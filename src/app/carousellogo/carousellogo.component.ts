import { Component, NgModule } from '@angular/core';
import{CommonModule}from '@angular/common';
import {AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousellogo',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './carousellogo.component.html',
  styleUrl: './carousellogo.component.css'
})
export class CarousellogoComponent {

  logos=[
    {src:'assets/carousellogo/logo1.png', alt: 'logo solutec'},
    {src:'assets/carousellogo/logo2.png', alt: 'logo Enedis'}, 
    {src: 'assets/carousellogo/logo3.png', alt: 'logo infotel'},
    {src: 'assets/carousellogo/logo4.png', alt: 'logo amaris'},
    {src: 'assets/carousellogo/logo5.png', alt: 'logo voice digit '},

  ]
 
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;
  currentCenterIndex = 0; // Index du logo actuellement au centre
  interval!: any;

  ngAfterViewInit() {
    this.startCarousel();
  }

  startCarousel() {
    const track = this.carouselTrack.nativeElement;
    const slides = track.children;
    const slideWidth = slides[0].offsetWidth + 30; // Largeur d'une diapositive + marge
    let position = 0;

    // Create clones for infinite loop
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    const moveToNextSlide = () => {
      this.currentCenterIndex = (this.currentCenterIndex + 1) % this.logos.length; // Circular index
      position = -(this.currentCenterIndex * slideWidth);
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = `translateX(${position}px)`;

      clearInterval(this.interval); 
      setTimeout(() => {
        this.interval = setInterval(moveToNextSlide, 1500); // 1.5 seconds interval
      }, 1500); 
    };

    this.interval = setInterval(moveToNextSlide, 1500); // Start the carousel
  }

  
}
