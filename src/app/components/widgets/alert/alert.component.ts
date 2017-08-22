import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-alert',
	template: `
		<div class="alert-dialog">
			<div class="sa-icon sa-error animateErrorIcon" *ngIf="type == 'error'">
				<span class="sa-x-mark animateXMark">
					<span class="sa-line sa-left"></span>
					<span class="sa-line sa-right"></span>
		  		</span>
		  	</div>

			<div class="sa-icon sa-warning" *ngIf="type == 'warning'">
				<span class="sa-body"></span>
				<span class="sa-dot"></span>
			</div>

			<div class="sa-icon sa-info" *ngIf="type == 'info'"></div>

			<div class="sa-icon sa-success animate" *ngIf="type == 'success'">
				<span class="sa-line sa-tip animateSuccessTip"></span>
				<span class="sa-line sa-long animateSuccessLong"></span>
				<div class="sa-placeholder"></div>
				<div class="sa-fix"></div>
			</div>

			<h2 *ngIf="title">{{ title }}</h2>
			<p *ngIf="message">{{ message }}</p>
		</div>
	`,
	styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {
	public type: String;
	public title: String;
	public message: String;
	constructor(@Inject(MD_DIALOG_DATA) public data: any) { 
		this.type = this.data.type;
		this.title = this.data.title;
		this.message = this.data.message;
	}

	ngOnInit() { }
}