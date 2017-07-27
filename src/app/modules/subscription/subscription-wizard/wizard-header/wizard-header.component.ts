import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'wizard-header',
	template: `
		<div class="wz-header d-sm-flex d-none flex-row justify-content-between">
			<div class="d-flex mdl-step" [ngClass]="{'is-active': step === 1}">
				<span class="mdl-step__label">
				<span class="mdl-step__title">
					<span class="mdl-step__title-text">Title of step 1</span>
				</span>
				<span class="mdl-step__label-indicator"><span class="mdl-step__label-indicator-content">1</span></span></span>
			</div>
			<div class="d-flex mdl-step" [ngClass]="{'is-active': step === 2}">
				<span class="mdl-step__label">
				<span class="mdl-step__title">
					<span class="mdl-step__title-text">Title of step 2</span>
				</span>
				<span class="mdl-step__label-indicator"><span class="mdl-step__label-indicator-content">2</span></span></span>
			</div>
			<div class="d-flex mdl-step" [ngClass]="{'is-active': step === 3}">
				<span class="mdl-step__label">
				<span class="mdl-step__title">
					<span class="mdl-step__title-text">Title of step 3</span>
				</span>
				<span class="mdl-step__label-indicator"><span class="mdl-step__label-indicator-content">3</span></span></span>
			</div>
		</div>
	`,
	styles: [`
		.wz-header {
			margin: -24px -24px 24px -24px!important;
			padding: 0 24px;
			box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
		}
		.mdl-step:not(:last-child):after {
			content: '';
			position: relative;
			flex: 1;
			top: 37px;
			width: 168px;
			margin-left: -12px;
			height: 1px;
			background-color: rgba(0, 0, 0, 0.1);
		}

		.mdl-step:not(:last-child) {
			flex: 1;
		}

		.mdl-step {
			position: static;
			-webkit-display: flex;
			-moz-display: flex;
			-ms-display: flex;
			display: flex;
			justify-content: center;
			align-items: initial;
			margin-top: 0 !important;
			margin-bottom: 0 !important;
			height: initial;
			max-height: 84px;
			overflow: hidden;
		}

		.mdl-step__label {
			padding: 24px;
		}
	`]
})

export class WizardHeaderComponent implements OnInit {
	@Input() step;
	constructor() { }

	ngOnInit() {
		console.warn(this.step);
	 }
}