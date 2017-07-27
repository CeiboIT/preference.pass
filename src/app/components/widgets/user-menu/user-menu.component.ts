import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  template: `
    <span [mdMenuTriggerFor]="menu">
      {{user.name}}
    </span>
    <button md-icon-button [mdMenuTriggerFor]="menu">
      <md-icon>more_vert</md-icon>
    </button>
    <md-menu #menu="mdMenu">
      <button (click)="logOut()" md-menu-item>Logout</button>
    </md-menu>
  `,

})
export class UserMenuComponent implements OnInit {
  @Input() user;
  @Output() onUserLogOut: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  get userPhoto() {
    return this.user.picture || '';
  }

}
