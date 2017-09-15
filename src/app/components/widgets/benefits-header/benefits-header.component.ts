import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-benefits-header',
	template: 
		`
		<div class="page-header" data-parallax="true" [ngStyle]="{
			'background-image': 'url(' + bgUrl +')'
		  }">
			<div class="filter"></div>
			<div class="content-center">
			  <div class="container">
				<div class="row">
				  <div class="col-md-8 offset-md-2 text-center">
					<h1 class="title mb-5"> Why Preference Pass</h1>
				  </div>
				</div>

				<div class="row">
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p class="description">Preference Pass is a membership for all.</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p>Best prices guaranteed.</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
							<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p>Only the best service providers.</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p>We make no money from offers we promote.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="row my-4">
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p class="description">You pay us a membership fee.</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p>Members get unlimited access to our offers.</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
							<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p>We provide info to help you choose.</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p>We act as your booking agent.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-6">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p class="description">You pay service provider directly.</p>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-circle-thin" aria-hidden="true"></i>
							</div>
							<div class="description">
								<p>Check out our video, click this link:</p>
							</div>
						</div>
					</div>
				</div>


			  </div>
			</div>
		  </div>
		`,
	styleUrls: ['./benefits-header.component.scss']
})

export class BenefitsHeaderComponent implements OnInit {
	bgUrl = 'https://firebasestorage.googleapis.com/v0/b/preferencepass-1499796934814.appspot.com/o/images%2FBG%2FMX%2FCancun_Mexico_Wallpaper_1.jpg?alt=media&token=0e770427-9c7d-42c1-bd91-fa6de0be1e41';
	constructor() { }

	ngOnInit() { }
}