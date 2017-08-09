import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'activity-detail-loader',
	template: `
				<div class="animated-background img"></div>
				`,
	styleUrls: ['./activity-detail-loader.component.scss']
})

export class ActivityDetailLoaderComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}