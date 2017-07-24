import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenLogin, OpenRegister } from '../../../actions/layout';
@Component({
  selector: 'app-toolbar',
  template: `    
    <md-toolbar color="primary">
    <div class="d-flex w-100 justify-content-between align-items-center">
        <div class="logo">
          <a routerLink="/">
            <img src="../../../../assets/imgs/PPLogo_circulo.png">
          </a>
        </div>
        <span></span>
        <button md-icon-button *ngIf="isLoggedIn">
          <md-icon>home</md-icon>
        </button>
        <div>
          <button md-button color="accent" (click)="openLogin()">
            Login
          </button>
          <button md-button color="accent" (click)="openRegister()">
            Register
          </button>
        </div>
      </div>

      <md-toolbar-row class="justify-content-center justify-content-sm-end">
        <div>
          <ul class="d-flex navbar-items">
            <li class="navbar-item">
              <a routerLink="/" routerLinkActive="active">
                Actividades
              </a>
            </li>
            <li class="navbar-item">
              <a>
                Categorias
              </a>
            </li>
            <li class="navbar-item">
              <a>
                Lugares
              </a>
            </li>
          </ul>
        </div>
      </md-toolbar-row>
    </md-toolbar>
  `,
  styleUrls: ['./toolbar.component.scss']
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
