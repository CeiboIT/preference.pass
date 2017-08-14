import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-user-profile',
	template: `
		profile content
	`
})

export class UserProfileComponent implements OnInit {
	@Input() currentUser;
	
	constructor() { }

	ngOnInit() { }
}