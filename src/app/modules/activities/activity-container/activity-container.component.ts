import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GetDetail } from '../../../actions/activities';
import { onStateChangeObservable } from '../../../utils/store';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-activity-container',
  template: `
    <button md-button (click)="goBack()">Ir a lista de Actividades</button>
    <app-activity-detail [activity]="activity$ | async"></app-activity-detail>
  `
})
export class ActivityContainerComponent implements OnInit {

  public activity$: Observable<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetDetail(this.activatedRoute.snapshot.params['id']));
    this.activity$ = onStateChangeObservable(this.store, 'activities.detail');
  }

  goBack(): void {
    this.router.navigate(['/landing']);
  }

}
