import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenContact } from "../../../actions/layout";

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container">
        <ul class="links">
          <li>
            <a routerLink="/">
              HOME
            </a>
          </li>
          <li>
            <a routerLink="/">
              ACTIVITIES
            </a>
          </li>
          <li>
            CATEGORIES
          </li>
          <li>
            PLACES
          </li>
          <li>
            FAQS
          </li>
          <li>
            <a class="link" (click)="openDialog();">CONTACT US</a>
          </li>
        </ul>

        <div class="logo mb-2">
          <img src="../../../../assets/imgs/PPLogo-full_white.svg">
        </div>

        <p>
          copyright 2017 preferencepass.com, all rights reserved.
        </p>

        <ul class="social">
          <li>
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-tripadvisor" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() { }

  openDialog() {
    this.store.dispatch(new OpenContact({}));
  }

}
