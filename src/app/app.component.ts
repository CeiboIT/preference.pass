import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <app-toolbar></app-toolbar>
    <h2>
      Router
    </h2>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app works!';
}
