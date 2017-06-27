import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { ActivitiesService } from '../../../services/activities/activities.service';
import {Store} from '@ngrx/store';
import { GetList } from '../../../actions/activities';
import {Observable} from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  providers: [ActivitiesService]
})

export class LandingContainerComponent implements OnInit {
  activities: Activity[];
  public activities$: Observable<any>;
  constructor(
    private store: Store<any>
  ) { }
  ngOnInit() {
    this.store.dispatch(new GetList({}));
    console.log(this.store)
    this.activities$ = onStateChangeObservable(this.store, 'activities.list');
  }
}
