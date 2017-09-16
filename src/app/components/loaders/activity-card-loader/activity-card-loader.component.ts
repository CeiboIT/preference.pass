import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'activity-card-loader',
	template: `
				<div class="animated-background img"></div>
				<div class="my-3 w-100 d-flex">
					<div class="animated-background title w-75"></div>
				</div>
				<div class="animated-background description mb-1"></div>
				<div class="animated-background description w-75"></div>
				`,
	styleUrls: ['./activity-card-loader.component.scss']
})

export class ActivityCardLoaderComponent implements OnInit {
	public items:any;
	constructor() { }

	ngOnInit() { }
}