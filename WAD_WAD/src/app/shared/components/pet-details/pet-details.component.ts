import { Component, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css'],
})
export class PetDetailsComponent {
  public petInfo: any;
  public updatedPetDetails: any;
  public petData: any;
  public petId: number | undefined;
  public petDetails: any;
  public petBehaviour: any;
  @Input() petInformation: any;
  constructor() {}
  ngOnChanges(changes: any) {
    // if (changes && changes.petInformation) {
    //   const newValue = changes.petInformation.currentValue;
    //   if (Array.isArray(newValue) && newValue.length > 0) {
    //     this.petInfo = newValue;
    //   }
    // }
    this.petInfo = changes.petInformation.currentValue;
    this.getPetDetails();
  }
  //method to get pet-details
  getPetDetails() {
    this.petDetails = { ...this.petInfo };
    console.log(this.petDetails);
    delete this.petDetails.PromptDetails;
    delete this.petDetails.images;
    delete this.petDetails.promptAns;
    delete this.petDetails.PetDescription;
    delete this.petDetails.PetId;
    delete this.petDetails.SpayedNeutered;
    delete this.petDetails.eatThings;
    delete this.petDetails.energyLevels;
    delete this.petDetails.feedingSchedule;
    delete this.petDetails.jump;
    delete this.petDetails.lat;
    delete this.petDetails.long;
    delete this.petDetails.pottySchedule;
    delete this.petDetails.rate;
    delete this.petDetails.socialShy;
    this.petBehaviour = { ...this.petInfo };
    delete this.petBehaviour.PromptDetails;
    delete this.petBehaviour.images;
    delete this.petBehaviour.promptAns;
    delete this.petBehaviour.PetDescription;
    delete this.petBehaviour.Age;
    delete this.petBehaviour.Breed;
    delete this.petBehaviour.Gender;
    delete this.petBehaviour.Weight;
    delete this.petBehaviour.address;
    delete this.petBehaviour.city;
    delete this.petBehaviour.PetId;
  }
}
