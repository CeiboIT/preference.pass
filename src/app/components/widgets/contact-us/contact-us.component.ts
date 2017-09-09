import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-us',
	template:
		`
			<div>
				<h2>We are here to help</h2>
				<div class="row">
					<div class="col-md-6">
						<div class="box mb-2 mb-md-0">							
							<div class="icon">
								<div class="image hidden-sm-down"><i class="fa fa-envelope" aria-hidden="true"></i></div>
								<div class="info">
									<h3 class="title mt-3">MAIL</h3>
									<p>
										<i class="fa fa-envelope hidden-sm-down" aria-hidden="true"></i> &nbsp; <a href="mailto:sales@preferencepass.com">sales@preferencepass.com</a>
									</p>
								</div>
							</div>
						</div> 
					</div>

					<div class="col-md-6">
						<div class="box">							
							<div class="icon">
								<div class="image hidden-sm-down"><i class="fa fa-mobile" aria-hidden="true"></i></div>
								<div class="info">
									<h3 class="title mt-3">PHONE</h3>
									<p>
										<i class="fa fa-mobile hidden-sm-down" aria-hidden="true"></i> &nbsp; <a href="tel:+018001124821">018001124821</a>
									</p>
								</div>
							</div>
						</div> 
					</div>
				</div>
			</div>
		`
	,
	styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}
