import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-activity-grid-container',
	template:
		`
			<app-activity-grid></app-activity-grid>
		`,
	styleUrls: ['./activity-grid-container.component.scss']
})

export class ActivityGridContainerComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}