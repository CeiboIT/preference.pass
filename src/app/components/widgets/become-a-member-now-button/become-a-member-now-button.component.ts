import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { OpenLogin } from '../../../actions/layout';

@Component({
	selector: 'app-become-a-member-now-button',
	template: 
	`
		<button md-raised-button class="d-block btn btn-warning btn-round w-100" (click)="openLogin()" *ngIf="!(user$ | async)">
			Become a member now
	  	</button>
	`,

	styles: [
		`
		button {
			padding: .3rem 1.5rem;
			font-size: 1.25rem;
		}
		`
	]
})

export class BecomeAMemberNowButtonComponent implements OnInit {
	public user$: Observable<any>;
	private subscriptionUser: ISubscription;
	constructor(private store: Store<any>) { }

	ngOnInit() { 
		this.user$ = onStateChangeObservable(this.store, 'auth.user');

		this.subscriptionUser = this.user$.subscribe();
	}

	openLogin() {
		this.store.dispatch(new OpenLogin({}));
	}

	ngOnDestroy() {
		this.subscriptionUser.unsubscribe();
	}
}