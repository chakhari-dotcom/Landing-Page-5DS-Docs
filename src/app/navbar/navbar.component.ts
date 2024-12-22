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
}
