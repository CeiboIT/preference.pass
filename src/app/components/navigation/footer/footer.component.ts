import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="mt-5">
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
            CONTACT US
          </li>
        </ul>

        <div class="logo mb-2">
          <img src="../../../../assets/imgs/logoPPblanco-3.png">
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

  constructor() { }

  ngOnInit() {
  }

}
