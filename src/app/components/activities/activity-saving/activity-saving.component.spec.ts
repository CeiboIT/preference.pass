import { TestBed, inject } from '@angular/core/testing';

import { ActivitySavingComponent } from './activity-saving.component';

describe('a activity-saving component', () => {
	let component: ActivitySavingComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ActivitySavingComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ActivitySavingComponent], (ActivitySavingComponent) => {
		component = ActivitySavingComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});