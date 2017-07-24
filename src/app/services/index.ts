import { ActivitiesService } from './activities/';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { SubscriptionService } from './subscription.service';

export const services = [
  ActivitiesService,
  AuthService,
  UserService,
  SubscriptionService
];
