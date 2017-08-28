import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

import { GetActivitiesByCategory } from '../../../actions/activities';

@Component({
	selector: 'app-activity-grid-container',
	template:
		`
			<div class="container mt-5">

				<app-activity-grid [activities]="activities$ | async"></app-activity-grid>
			</div>
		`,
	styleUrls: ['./activity-grid-container.component.scss']
})

export class ActivityGridContainerComponent implements OnInit {
	public activities$: Observable<any>;
	private types = {
		activities: 'ACTIVITIES',
		tours: 'TOURS',
		nightclubs: 'NIGHTCLUBS'
	};
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private store: Store<any>
	) { 

	}

	ngOnInit() { 
		const param = this.activatedRoute.snapshot.params['type'];
		const category = this.types[param];
		if (category) {
			this.store.dispatch(new GetActivitiesByCategory({name: category, fromLanding: true}));
			this.activities$ = onStateChangeObservable(this.store, 'activities.' + param);
		}
	}
}