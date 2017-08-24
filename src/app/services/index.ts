import { ActivitiesService } from './activities/';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { SubscriptionService } from './subscriptions/subscription.service';
import { BookingService } from "./booking.service";

export const services = [
  ActivitiesService,
  AuthService,
  UserService,
  SubscriptionService,
  BookingService
];
