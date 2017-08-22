import { Component, OnInit, Input } from '@angular/core';
declare var MaterialAvatar;

@Component({
	selector: 'app-person-element',
	template: 
		`
		<div class="d-flex align-items-center py-2 px-3 list-item">
			<div class="default-profile-photo mr-3" style="height:40px; width:40px;">
			{{ person.fullName }}
			</div>
			<div class="name">{{ person.fullName }}</div>
		</div>
		`
	,
	styles: [
		`
		.list-item {
			cursor: pointer;
		}

		.default-profile-photo {
			height: 40px;
			width: 40px;
		}

		.name {
			font-size: 16px;
			font-weight: 400;
			letter-spacing: .03em;
			line-height: 1;
		}
		`
	]
})

export class PersonElementComponent implements OnInit {
	@Input() person;
	constructor() { }

	ngOnInit() { 
		MaterialAvatar(document.getElementsByClassName('default-profile-photo'), {
			backgroundColor: '#000',
			shape: 'circle'
		});
	}
}