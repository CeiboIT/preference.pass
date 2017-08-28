import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-activity-grid',
	template: 
	`
		<div class="row">
			<div *ngFor="let activity of activities" class="col-md-4 col-sm-6 mb-4 pb-2">
				<app-activity-card [activity]="activity"></app-activity-card>
			</div>
		</div>
	`,
	styleUrls: ['./activity-grid.component.scss']
})

export class ActivityGridComponent implements OnInit {
	@Input() activities;
	constructor() { }

	ngOnInit() { }
}