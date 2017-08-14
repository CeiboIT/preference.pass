import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../utils/store';

@Component({
	selector: 'app-setings',
    template: `
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-4 col-lg-3">
                <md-card class="mb-3">
                    <img [src]="(user$ | async)?.picture" class="avatar mb-3">
                    <h4 class="text-center">{{ (user$ | async)?.name }}</h4>
                </md-card>

                <md-card class="menu">      
                    <ul>
                        <li class="active"><a href="#"><i class="fa fa-user"></i> Profile</a></li>
                        <li><a href="#"><i class="fa fa-map-marker"></i> Bookings</a></li>
                        <li><a href="#"><i class="fa fa-tag"></i> Subscriptions</a></li>
                        <li><a href="#"><i class="fa fa-users"></i> Companions</a></li>
                    </ul>
                </md-card>
            </div>

            <div class="col-sm-8 col-lg-9">
                <md-card>
                    <router-outlet></router-outlet>
                </md-card>
            </div>
        </div>
    </div>
        
    `,
	styleUrls: ['./user.component.scss']
})

export class UserContainerComponent implements OnInit {
    public user$: Observable<any>;
	constructor(private store: Store<any>) { 
		this.user$ = onStateChangeObservable(this.store, 'auth.user');
	}

	ngOnInit() { }
}