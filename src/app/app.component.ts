import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <div fxFlex fxLayout="column">
      <div fxFlex>
        <app-toolbar></app-toolbar>
      </div>
      <div fxFlex>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
