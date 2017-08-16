import {Component, Input, OnInit} from '@angular/core';

/**
 * {
  "id": "cj55h011onjqv0144hinwgxql",
  "name": "BAHIA PRINC.COBA",
  "mainPhoto": [
    {
      "url": "https://firebasestorage.googleapis.com/v0/b/preferencepass-1499796934814.appspot.com/o/images%2FMX%2FQR%2FCUN%2Fpicks%20up%2Fgran-bahia-principe-coba%20ENTRADA.jpg?alt=media&token=d6bff93f-e2ae-4da7-9bcb-9d03399627c0"
    }
  ],
  "lng": -87.33743899999999,
  "lat": 20.362493,
  "departures": [
    {
      "times": [
        "14:30 MONDAY TO SATURDAY."
      ],
      "__typename": "Departure"
    },
    {
      "times": [
        "09:15 daily."
      ],
      "__typename": "Departure"
    },
    {
      "times": [
        "07:55 daily",
        "Chichen itza(monday to saturday)"
      ],
      "__typename": "Departure"
    }
  ],
  "__typename": "PickUpLocation"
}
 */


@Component({
  selector: 'app-pickup-location-preview',
  template: `
    
    <div class="row">
      <div class="col-md-4">
        <div class="w-100 pickup-location-preview__image"
             [ngStyle]="{'background-image': 'url(' + mainPhoto + ')'}"
        >
        </div>
      </div>
      <div class="col-md-8">
        <div class="col-12">
          <h3 class="pickup-location-preview__title">
            {{ pickUpLocation?.name}} - {{ pickUpLocation?.formattedAddress }}
          </h3>
        </div>
        <div class="col-12 mt-3">
            <agm-map [latitude]="pickUpLocation?.lat" [longitude]="pickUpLocation?.lng">
              <agm-marker [latitude]="pickUpLocation?.lat" [longitude]="pickUpLocation?.lng"></agm-marker>
            </agm-map>
        </div>
      </div>
    </div>
  
  `,
  styles: [`
    .pickup-location-preview__image {height:350px; background-repeat: no-repeat !important; background-size: cover !important;}
  
  `]
})
export class PickupLocationPreviewComponent implements OnInit {
  @Input() pickUpLocation;
  constructor() {

  }

  get mainPhoto() {
    if (this.pickUpLocation && this.pickUpLocation.mainPhoto) {
      return this.pickUpLocation.mainPhoto[0].url;
    } else {
      return '';
    }
  }

  ngOnInit() {
  }

}
