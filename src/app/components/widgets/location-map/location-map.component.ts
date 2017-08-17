import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-location-map',
	template: `
	<agm-map [latitude]="location?.lat" [longitude]="location?.lng">
		<agm-marker [latitude]="location?.lat" [longitude]="location?.lng"></agm-marker>
	</agm-map>
	`,
	styles: [
		`
		agm-map {
			height: 300px;
		}

		@media screen and (max-width: 767px) {
			agm-map {
				height: 250px;
			}
		}
		`
	]
})

export class LocationMapComponent implements OnInit {
	@Input() location;
	constructor() { }

	ngOnInit() { }
}