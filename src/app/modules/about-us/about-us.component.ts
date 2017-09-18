import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-us',
	template: 
		`
		<div class="page-header page-header-small" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/preferencepass-1499796934814.appspot.com/o/images%2FBG%2FMX%2FCancun_Mexico_Wallpaper_1.jpg?alt=media&token=0e770427-9c7d-42c1-bd91-fa6de0be1e41');">
			<div class="filter filter-warning"></div>
			<div class="content-center">
				<div class="container">
					<h1>Hello, <br> We are Preference Pass.</h1>
					<h3 class="mt-3">Let us tell you more about what we do.</h3>
				</div>
			</div>
		</div>

		<div class="container my-5">
			<h3 class="text-uppercase mb-3">About Us:</h3>
			<p>
				We set up Preference Pass as a trusted member site to help tourists when they arrive on vacation in a foreign land. When you don’t know where to go, what to do, how much to pay, or who can help you when you have a problem, Preference Pass is there. We try to ensure that we provide you with all the information you need to stop you from wasting your time, being ripped off, or worse. We help you during your stay by ensuring that you get both the relevant information you might need and access to the best prices and conditions on a whole variety of activities and services. What to do and where to go is widely promoted on many travel web sites, but the local knowledge is not, we provide you with information which is both widely available and that which only the locals know. If something does go wrong you don’t know where to turn for help, and those that do help often do so to take advantage of your situation, you can rely on us, we help you. If you have a problem, or get into a tight spot we provide you with the information you need. At Preference Pass we want to take the stress out of your vacation.			
			</p>
		</div>
		`	
		,
	styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}