import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-header',
  template: `
    <div class="page-header" data-parallax="true" [ngStyle]="{
      'background-image': 'url(' + bgUrl +')'
    }">
      <div class="filter"></div>
      <div class="content-center">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
              <h1 class="title"> Preference Pass is a membership</h1>
              <h5 class="description">
                Choose the duration which suits you best, add your family members and enjoy the best prices and options 
                that we provide to you, as if you were a local.
                <br>
              </h5>
              
              <h5>
                You're in vacations, you're in Preference Pass, you're like you were in your land.
              </h5>
              <br />
            </div>
            <div class="col-md-10 offset-md-1">
              <button type="button" class="btn btn-info btn-header-subscription btn-block btn-lg">
                &nbsp; Buy your subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  `,
  styleUrls: ['./subscription-header.scss']
})
export class SubscriptionHeaderComponent implements OnInit {
  constructor() { }
  bgUrl = 'https://firebasestorage.googleapis.com/v0/b/preferencepass-1499796934814.appspot.com/o/images%2FBG%2FMX%2FCancun_Mexico_Wallpaper_1.jpg?alt=media&token=0e770427-9c7d-42c1-bd91-fa6de0be1e41';
  ngOnInit() {
  }

}
