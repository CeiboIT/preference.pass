import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
	GetActivitiesByCategory,
	GetHotDeals,
	GetHotDealsSuccess,
	GetListSuccess
	} from '../../../actions/activities';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';


@Component({
	selector: 'app-activity-grid-container',
	template:
		`
			<div class="container mt-5">
				<h3 class="text-capitalize mb-4">{{ title }}</h3>
				<app-activity-grid [activities]="activities$ | async" [isHotDeal]="isHotDeal"></app-activity-grid>
			</div>
		`,
	styleUrls: ['./activity-grid-container.component.scss']
})

export class ActivityGridContainerComponent implements OnInit {
	public activities$: Observable<any>;
	public param;
	private types = {
		activities: 'ACTIVITIES',
		tours: 'TOURS',
		transport: 'TRANSPORT',
		nightclubs: 'NIGHTCLUBS',
		shows: 'SHOW',
		offers: 'ACTIVITIES',
		healthandbeauty: "HEALTHANDBEAUTY"
		
	};
	public isHotDeal: Boolean = false;
	private subscriptionActivities: ISubscription;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private store: Store<any>
	) {

	}

	ngOnInit() {
		this.param = this.activatedRoute.snapshot.params['type'];
		const category = this.types[this.proccessCategory(this.param)];

		if (category && this.param != 'hot-deals') {
			this.store.dispatch(new GetActivitiesByCategory({name: category}));
			this.activities$ = onStateChangeObservable(this.store, 'activities.list');
		}
		if (this.param === 'hot-deals') {
			this.isHotDeal = true;
			this.store.dispatch(new GetHotDeals({}));
			this.activities$ = onStateChangeObservable(this.store, 'activities.hotDeals');
		}

		this.subscriptionActivities = this.activities$.subscribe();
	}

	get title() {
		return this.isHotDeal ? 'Hot Deals' : this.param;
	}

	proccessCategory(category) {
		return (category.replace(/ /g,'')).toLowerCase();
	}

	ngOnDestroy() {
		this.subscriptionActivities.unsubscribe();
		this.store.dispatch(new GetHotDealsSuccess([]));
		this.store.dispatch(new GetListSuccess([]));
	}
}
