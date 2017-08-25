import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-success-animation',
	template: 
	`
		<div class="sa-icon sa-success animate">
			<span class="sa-line sa-tip animateSuccessTip"></span>
			<span class="sa-line sa-long animateSuccessLong"></span>
			<div class="sa-placeholder"></div>
			<div class="sa-fix"></div>
		</div>
	`
	,
	styleUrls: ['./success-animation.component.scss']
})

export class SuccessAnimationComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}