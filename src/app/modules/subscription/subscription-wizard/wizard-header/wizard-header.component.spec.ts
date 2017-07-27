import { TestBed, inject } from '@angular/core/testing';

import { WizardHeaderComponent } from './wizard-header.component';

describe('a wizard-header component', () => {
	let component: WizardHeaderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				WizardHeaderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([WizardHeaderComponent], (WizardHeaderComponent) => {
		component = WizardHeaderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});