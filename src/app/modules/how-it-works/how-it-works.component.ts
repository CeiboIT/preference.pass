import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-how-it-works',
	template: 
		`
		<div class="page-header page-header-small" [ngStyle]="{'background-image': 'url(' + bgUrl +')'}">
			<div class="filter filter-warning"></div>
			<div class="content-center">
				<div class="container">
					<h1>Hello, <br> We are Preference Pass.</h1>
					<h3 class="mt-3">Let us tell you more about what we do.</h3>
				</div>
			</div>
		</div>

		<div class="container my-5">
			<h3 class="text-uppercase mb-3">How it works:</h3>
			
			<p>Preference Pass is a paid membership, we give everybody access to the basic information on our site, but if you want to take advantage of one of our offers, or need help, you must become a member. </p>
			<p>We select and receive requests for a whole variety of tours, activities and service providers. We then research the best providers available, who offer you only the best, safest and most reliable services. We then use our negotiating might to get the best prices available from them and pass these on to our members at no additional charge whatsoever. As a member of Preference Pass you get access to all our discounts to use them as many times as you like throughout the duration of your membership.</p>
			<p>Preference Pass is a membership, you choose the duration which suits you best. Membership is individual, but you can add the members of your family who you wish to include in your account. </p>
			<p>We provide you with options which are widely available and options which only the locals know and which you can safely try.</p>
			<p>When you book a tour or activity with us, we will send you a confirmation of your booking, including the instructions for pick up and payment. Payment will be made directly to the service provider, not us. Not all our offers require a booking, some of them, such as restaurants only require you to show your valid membership. We are not a tour operator, therefore payment will not be made to us, but directly to the service provider, we act as the intermediary to ensure that your booking is made and honored.</p>
			<p>All our service providers are monitored to ensure that they provide you with the service they advertise and that you pay for. </p>
			<p>If you need help finding a reliable doctor, dentist, lawyer, translator, hospital, etc., etc., we help you find someone who is both reliable and good value.</p>
			<p>We have a toll free help line open to help all our members, no problem is too big for us. At Preference Pass we have all your needs covered.</p>
			
		</div>
		`,
	styleUrls: ['./how-it-works.component.scss']
})

export class HowItWorksComponent implements OnInit {
	bgUrl = 'https://firebasestorage.googleapis.com/v0/b/preferencepass-1499796934814.appspot.com/o/images%2FBG%2FMX%2FCancun_Mexico_Wallpaper_1.jpg?alt=media&token=0e770427-9c7d-42c1-bd91-fa6de0be1e41';
	constructor() { }

	ngOnInit() { }
}