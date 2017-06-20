import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenLogin, OpenRegister } from '../../../actions/layout';
@Component({
  selector: 'app-toolbar',
  template: `    
    <md-toolbar color="primary">
      Preference pass
      <span fxFlex></span>
      <button md-icon-button *ngIf="isLoggedIn">
        <md-icon>home</md-icon>
      </button>
      <div>
        <button md-raised-button color="accent" (click)="openLogin()">
          Login
        </button>
        <button md-raised-button color="accent">
          Register
        </button>
      </div>

      <md-toolbar-row >
        <div fxFlex fxFlexAlign.gt-sm="center">
          <button md-button>Actividades
          </button>
          <button md-button>Categorias
          </button>
          <button md-button>Lugares
          </button>
        </div>
      </md-toolbar-row>
    </md-toolbar>
  
  `
})
export class ToolbarComponent implements OnInit {
  public isLoggedIn = false;
  constructor(private store: Store<any>) { }

  ngOnInit() {}

  openLogin() {
    this.store.dispatch( new OpenLogin({}));
  }

  openRegister() {
    this.store.dispatch(new OpenRegister({}));
  }
}
