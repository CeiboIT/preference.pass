import { Injectable } from '@angular/core';
import { Activity } from '../../models/activity';

// mock de activities
/*
export const ACTIVITIES: Activity[] = [
  { name: 'Cenote Celeste', location: 'Tulum', price:12000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
  { name: 'Cenote Azul', location: 'Cancun', price:12000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
  { name: 'Paseo por shoppings', location: 'Mexico DF', price:12000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
  { name: 'Paseo en monociclo', location: 'Tulum ', price:12000 },
  { name: 'Tour de cenotes', location: 'Riviera Maya', price:12000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
  { name: 'Cena para 3 personas 20% off', location: 'Cancun', price:12000 }
];
*/
export const ACTIVITIES: Activity[] = [
  { name: 'Cenote Celeste', location: 'Tulum', price:12000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
  { name: 'Cenote Azul', location: 'Cancun', price:12000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
  { name: 'Paseo por shoppings', location: 'Mexico DF', price:12000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
];

@Injectable()
export class ActivitiesService {

  constructor() {}

  getAllActivities(): Promise<Activity[]> {
    return Promise.resolve(ACTIVITIES);
  }

}
