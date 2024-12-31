# Exemples de code

Voici un exemple pour le composant Navbar :

```typescript
// src/app/navbar/navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Landing Page 5ds';
}
