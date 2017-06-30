import { Injectable } from '@angular/core';
import { Activity } from '../../models/activity';

// mock de activities
export const ACTIVITIES: Activity[] = [
  { id: 1, name: 'Cenote Celeste', 
    location: 'Tulum', 
    imageURL:"https://goo.gl/akgGCC", 
    price:12000,
    discount:11000,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  { id: 2, 
    name: 'Cenote Azul', 
    location: 'Cancún', 
    imageURL:"https://goo.gl/akgGCC", 
    price:12000, 
    discount:10000,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  { id: 3, 
    name: 'Paseo por shoppings', 
    location: 'Mexico DF', 
    imageURL:"https://goo.gl/akgGCC", 
    price:12000, 
    discount:9000,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  { id: 4, 
    name: 'Paseo en monociclo', 
    location: 'Tulum ', 
    imageURL:"https://goo.gl/akgGCC", 
    price:12000,
    discount:4000
  },
  { id: 5, 
    name: 'Tour de cenotes', 
    location: 'Riviera Maya', 
    imageURL:"https://goo.gl/akgGCC", 
    price:12000,
    discount:7000, 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  { id: 6, 
    name: 'Cena para 3 personas 20% off', 
    location: 'Cancun', 
    imageURL:"https://goo.gl/akgGCC", 
    price:12000,
    discount:4000
  }
];

@Injectable()
export class ActivitiesService {

  constructor() {}

  getAllActivities(): Promise<Activity[]> {
    return Promise.resolve(ACTIVITIES);
  }

  getActivityByID(id: number): Promise<Activity> {
    return this.getAllActivities().then(
      activities => activities.find(activity => activity.id === id)
    );
  }

}
