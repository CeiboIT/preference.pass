import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-activity-grid',
	template: 
	`
		<div class="row">
			<div *ngFor="let activity of activities" class="mb-4 pb-2" [ngClass]="{'col-md-4 col-sm-6': !isHotDeal, 'col-md-3 col-sm-4 col-6': isHotDeal }">
				<app-activity-card [activity]="activity" *ngIf="!isHotDeal"></app-activity-card>
				<app-hot-deal-card [hotDeal]="activity" *ngIf="isHotDeal"></app-hot-deal-card>
			</div>
		</div>

		<div class="row" *ngIf="!activities.length">
			<div *ngFor="let item of items" class="mb-4 pb-2" [ngClass]="{'col-md-4 col-sm-6': !isHotDeal, 'col-md-3 col-sm-4 col-6': isHotDeal }">
				<activity-card-loader *ngIf="!isHotDeal"></activity-card-loader>
				<hot-deals-card-loader *ngIf="isHotDeal"></hot-deals-card-loader>
			</div>
		</div>
	`,
	styleUrls: ['./activity-grid.component.scss']
})

export class ActivityGridComponent implements OnInit {
	@Input() activities;
	@Input() isHotDeal;
	public items;
	constructor() { }

	ngOnInit() { 
		const num = this.isHotDeal ? 4 : 3;
		this.items = Array(num).fill(0).map((x,i)=>i);
	}


}