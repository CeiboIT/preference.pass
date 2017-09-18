import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenLogin, OpenRegister, OpenContact } from '../../../actions/layout';
import { AuthLogOut } from '../../../actions/auth';

@Component({
  selector: 'app-toolbar',
  template: `    
  <md-toolbar color="primary">
    <div class="d-flex w-100 justify-content-between align-items-center">
        <div class="logo d-flex flex-row align-items-center">
          <a routerLink="/">
            <img src="../../../../assets/imgs/PPLogo-circle_white.svg">
          </a>
          <h2><a class="hidden-xs-down ml-2" routerLink="/">Preference pass</a></h2>
        </div>
        <div *ngIf="isLoggedIn">
          <app-user-menu [user]="user" (onUserLogOut)="onUserLogOut()"></app-user-menu>
        </div>
        <div *ngIf="!isLoggedIn">
          <button md-button color="accent" (click)="openLogin()">
            Login
          </button>
          <button md-button color="accent" (click)="openRegister()">
            Register
          </button>
        </div>
      </div>

      <md-toolbar-row class="justify-content-center justify-content-sm-end align-items-end">
        <div>
          <ul class="d-flex navbar-items">
            <li class="navbar-item">
              <a routerLink="/" routerLinkActive="active">
                Offers
              </a>
            </li>
            <li class="navbar-item">
              <a routerLink="/about-us" routerLinkActive="active">
                About Us
              </a>
            </li>
            <li class="navbar-item">
              <a routerLink="/how-it-works" routerLinkActive="active">
                How it works
              </a>
            </li>
            <li class="navbar-item">
              <a (click)="openContactUs();">
                Contact us
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
  @Input() user;
  @Output() onLogOut: EventEmitter<any> = new EventEmitter();
  constructor(private store: Store<any>) { }

  ngOnInit() {}

  openLogin() {
    this.store.dispatch( new OpenLogin({}));
  }

  openRegister() {
    this.store.dispatch(new OpenRegister({}));
  }

  openContactUs() {
    this.store.dispatch(new OpenContact({}));
  }

  onUserLogOut() {
    this.store.dispatch(new AuthLogOut({}));
  }

  get isLoggedIn() {
    return this.user && this.user.id;
  }
}
