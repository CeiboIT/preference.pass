import { Component, OnInit, Input} from '@angular/core';

/**
 * Displays the total savings based on the selected rate and Kids and Adults amount
 */
@Component({
  selector: 'app-total-saving',
  template: `
    <span>
       {{ savings }} {{ rate?.currency }}
    </span>
  `
})
export class TotalSavingComponent implements OnInit {
  @Input() amountOfKids;
  @Input() amountOfAdults;
  @Input() rate;
  /*
    By default, the kids pays 50% less than adults.
   */
  @Input() kidsDiscountPercentage = 50;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Calculates the saving amount based on activity price, adults and kids
   */
  get savings() {
    if (this.rate && this.amountOfAdults) {
      const _originalPrice = this.rate.originalPrice;
      const _discountPrice = this.rate.discountPrice;
      const _savingPerAdult = _originalPrice - _discountPrice;
      const _savingPerKid = _savingPerAdult - (_savingPerAdult * (this.kidsDiscountPercentage / 100));
      const _kidsTotalSaving = _savingPerKid * this.amountOfKids;
      const _adultsSaving = _savingPerAdult * this.amountOfAdults;
      console.log(this.amountOfAdults);
      console.log(_adultsSaving);
      console.log(_kidsTotalSaving);
      return _kidsTotalSaving + _adultsSaving;
    } else {
      console.log('Rate not found');
      return 0;
    }

  }


}
