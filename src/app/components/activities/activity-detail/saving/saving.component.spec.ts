import { TestBed, inject } from '@angular/core/testing';

import { SavingComponent } from './saving.component';

describe('a saving component', () => {
	let component: SavingComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SavingComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SavingComponent], (SavingComponent) => {
		component = SavingComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});