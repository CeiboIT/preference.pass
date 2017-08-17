import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-companions-container',
	template: `
		<h1>Companions</h1>
		<app-user-companions></app-user-companions>
	`
})

export class CompanionsContainerComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}