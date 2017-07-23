import { TestBed, inject } from '@angular/core/testing';

import { PhotoswipeComponent } from './photoswipe.component';

describe('a photoswipe component', () => {
	let component: PhotoswipeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PhotoswipeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PhotoswipeComponent], (PhotoswipeComponent) => {
		component = PhotoswipeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});