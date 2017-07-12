import { ActivitiesQueries } from "./queries";
import { ActivitiesService as activitiesService} from "./activities.service";
export const ActivitiesService = [ActivitiesQueries, activitiesService];