import { Component, OnInit } from '@angular/core';
import {
  GetActivitiesByCategory,
  GetHotDeals,
  GetHotDealsFailure,
  GetList,
  GetTours
  } from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <div class="landing-container">
      <div class="hot-deals py-5">
        <div class="d-flex justify-content-between title mb-4">
            <h3 class="mb-0">        
              Hot deals
            </h3>

            <div class="see-more">
              <span>
                see more
              </span>
              <svg aria-hidden="true" focusable="false" role="presentation" style="fill: currentcolor; height: 10px; width: 10px;" viewBox="0 0 18 18"><path _ngcontent-c5="" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z" fill-rule="evenodd"></path></svg>
            </div>
          </div>
        <app-hot-deals-list [hotDeals]="hotDeals$ | async"></app-hot-deals-list>
      </div>
      
      <div class="my-5">
        <div class="d-flex justify-content-between title mb-4">
          <h3 class="mb-0">        
            Tours
          </h3>

          <div class="see-more">
            <span>
              see more
            </span>
            <svg aria-hidden="true" focusable="false" role="presentation" style="fill: currentcolor; height: 10px; width: 10px;" viewBox="0 0 18 18"><path _ngcontent-c5="" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z" fill-rule="evenodd"></path></svg>
          </div>
      </div>
        <app-activity-list [activities]="tours$ | async "></app-activity-list>
      </div>

      <div class="my-5">
        <div class="d-flex justify-content-between title mb-4">
          <h3 class="mb-0">        
            Activities
          </h3>

          <div class="see-more">
            <span>
              see more
            </span>
            <svg aria-hidden="true" focusable="false" role="presentation" style="fill: currentcolor; height: 10px; width: 10px;" viewBox="0 0 18 18"><path _ngcontent-c5="" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z" fill-rule="evenodd"></path></svg>
          </div>
        </div>
        <app-activity-list [activities]="activities$ | async "></app-activity-list>
      </div>

      <div class="my-5">
        <div class="d-flex justify-content-between title mb-4">
          <h3 class="mb-0">        
            Nightclubs
          </h3>

          <div class="see-more">
              see more            
            <svg aria-hidden="true" focusable="false" role="presentation" style="fill: currentcolor; height: 10px; width: 10px;" viewBox="0 0 18 18"><path _ngcontent-c5="" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z" fill-rule="evenodd"></path></svg>
          </div>
        </div>
        <app-activity-list [activities]="nightclubs$ | async "></app-activity-list>
      </div>
    </div>
  `,
  styles: [ `

    .landing-container {
      background-color: white;
    }

    .title {
        padding: 0 60px;
        overflow: hidden;
    }

    .hot-deals {
      background-color: #f1f1f1;
    }

    @media screen and (max-width: 480px) {
      .title {
        padding: 0 10px;
      } 
    }
  ` ]
})

export class LandingContainerComponent implements OnInit {
  public activities$: Observable<any>;
  public tours$: Observable<any>;
  public nightclubs$: Observable<any>;
  public hotDeals$: Observable<any>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetActivitiesByCategory({name: 'ACTIVITIES', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'TOURS', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'NIGHTCLUBS', fromLanding: true}));
    this.store.dispatch(new GetHotDeals({}));
    this.activities$ = onStateChangeObservable(this.store, 'activities.activities');
    this.tours$ = onStateChangeObservable(this.store, 'activities.tours');
    this.nightclubs$ = onStateChangeObservable(this.store, 'activities.nightclubs');
    this.hotDeals$ = onStateChangeObservable(this.store, 'activities.hotDeals');
  }
}
