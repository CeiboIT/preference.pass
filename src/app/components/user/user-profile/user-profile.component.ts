import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-user-profile',
	template: `
		<h1>profile</h1>
	`
})

export class UserProfileComponent implements OnInit {
	@Input() currentUser;
	
	constructor() { }

	ngOnInit() { }
}