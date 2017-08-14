import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-subscriptions-container',
	template: `
		<h1>Subscriptions</h1>
		<app-user-subscriptions></app-user-subscriptions>
	`,
})

export class SubscriptionsContainerComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}