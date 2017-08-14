import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  template: `
    <img class="rounded-circle avatar-sm" [src]="user.picture" alt="User avatar" [mdMenuTriggerFor]="menu">
    <button md-icon-button [mdMenuTriggerFor]="menu">
      <md-icon>more_vert</md-icon>
    </button>
    <md-menu #menu="mdMenu">
      <button routerLink="/user/profile" md-menu-item>Profile</button>
      <button (click)="logOut()" md-menu-item>Logout</button>
    </md-menu>
  `,
  styles: [
    `
      img.avatar-xs {
        height: 20px;
        width: 20px;
      }

      img.avatar-sm {
        height: 40px;
        width: 40px;
      }

      img.avatar-md, img.avatar- {
        height: 60px;
        width: 60px;
      }

      img.avatar-lg {
        height: 100px;
        width: 100px;
      }

      img.avatar-xl {
        height: 150px;
        width: 150px;
      }

      img.avatar-xxl {
        height: 200px;
        width: 200px;
      }
      .rounded-circle {
        border-radius: 50%;
      }
    
    `
  ]

})
export class UserMenuComponent implements OnInit {
  @Input() user;
  @Output() onUserLogOut: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  logOut() {
    this.onUserLogOut.emit();
  }

  get userPhoto() {
    return this.user.picture || '';
  }

}
