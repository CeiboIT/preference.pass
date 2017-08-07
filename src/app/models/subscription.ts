export interface Price {
  id: string;
  adultPrice: number;
  days: number;
  kidPrice: number;
  currency: string;
}


export interface CardValidationResponse {
  assignedToOtherUser?: boolean;
  validCard?: boolean;
  assigned?: boolean;
}
