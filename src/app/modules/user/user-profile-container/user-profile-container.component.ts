import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
	selector: 'app-user-profile-container',
	template: 
		`
			<app-user-profile [currentUser]="user$ | async"></app-user-profile>
		`
	,
	styleUrls: ['./user-profile-container.component.scss']
})

export class UserProfileContainerComponent implements OnInit {
	public user$: Observable<any>;
	constructor(private store: Store<any>) { 
		this.user$ = onStateChangeObservable(this.store, 'auth.user');
	}

	ngOnInit() { }
}