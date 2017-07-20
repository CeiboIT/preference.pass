import { TestBed, inject } from '@angular/core/testing';

import { PriceDisplayerComponent } from './price-displayer.component';

describe('a app-price-displayer component', () => {
	let component: PriceDisplayerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PriceDisplayerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PriceDisplayerComponent], (PriceDisplayerComponent) => {
		component = PriceDisplayerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});