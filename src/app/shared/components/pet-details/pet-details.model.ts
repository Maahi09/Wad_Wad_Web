//for response of pet-info
export class petInfo {
  Age?: string;
  Breed?: string;
  Gender?: string;
  Name?: string;
  PetDescription?: string;
  PetId?: string;
  PromptDetails?: [
    {
      PromptAnswer?: string;
      createdAt?: string;
      promptsTitle?: string;
    }
  ];
  SpayedNeutered?: number;
  Weight?: string;
  address?: string;
  city?: string;
  eatThings?: number;
  energyLevels?: string;
  feedingSchedule?: string;
  images?: string[];
  jump?: number;
  lat?: number;
  long?: number;
  pottySchedule?: string;
  promptAns?: string[];
  rate?: number;
  review?: string;
  socialShy?: number;
}
//for response of pet-details
export class petDetails {
  Age?: string;
  Breed?: string;
  Gender?: string;
  Name?: string;
  Weight?: string;
  address?: string;
  city?: string;
}
//for response of petBehaviour
export class petBehaviour {
  Name?: string;
  SpayedNeutered?: number;
  eatThings?: number;
  energyLevels?: string;
  feedingSchedule?: string;
  jump?: number;
  lat?: number;
  long?: number;
  pottySchedule?: string;
  rate?: number;
  socialShy?: number;
}
