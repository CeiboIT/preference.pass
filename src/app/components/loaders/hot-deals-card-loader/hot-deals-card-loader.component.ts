import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'hot-deals-card-loader',
	template: `
				<div class="animated-background img"></div>
				<div class="my-3 w-100 d-flex">
					<div class="animated-background title w-75 mr-5"></div>
					<div class="animated-background price w-25"></div>
				</div>
				<div class="animated-background description mb-1"></div>
				<div class="animated-background description w-75"></div>
				`,
	styleUrls: ['./hot-deals-card-loader.component.scss']
})

export class HotDealsCardLoaderComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}