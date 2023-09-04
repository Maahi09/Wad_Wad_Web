
//for owner-details response
export class ownerDetails{
    code?: number;
    data?:
     {
        UserDetails?:{
            email?:string;
            firstName?:string;
            lastName?:string;
            phoneNumber?:string;
            userId?:string;
        },
        petsDetails:[
            {
                Age?:string;
                Breed?:string;
                Gender?:string;
                Name?:string;
                PetDescription?:string;
                PetId?:string;
                PromptDetails?:[
                    {
                        PromptAnswer?:string;
                        createdAt?:string;
                        promptsTitle?:string;
                    }
                ];
                SpayedNeutered?:number;
                Weight?:string;
                address?:string;
                city?:string;
                eatThings?:number;
                energyLevels?:string;
                feedingSchedule?:string;
                images?:string[];
                jump?:number;
                lat?:number;
                long?:number;
                pottySchedule?:string;
                promptAns?:string[];
                rate?:number;
                socialShy?:number
            }
        ]

       
    };
    status?: boolean
}
//for response of user-details in owner-details
export class userDetails{
    Name?:string;
    Profile?:string;
    Role?:string;
    TotalPet?:number;
    email?:string;
    phoneNumber?:string;
    userId?:string;
} 
//for response of pet-details in owner-details
export class petDetails{
    Age?:string;
                Breed?:string;
                Gender?:string;
                Name?:string;
                PetDescription?:string;
                PetId?:string;
                PromptDetails?:[
                    {
                        PromptAnswer?:string;
                        createdAt?:string;
                        promptsTitle?:string;
                    }
                ];
                SpayedNeutered?:number;
                Weight?:string;
                address?:string;
                city?:string;
                eatThings?:number;
                energyLevels?:string;
                feedingSchedule?:string;
                images?:string[];
                jump?:number;
                lat?:number;
                long?:number;
                pottySchedule?:string;
                promptAns?:string[];
                rate?:number;
                socialShy?:number
}
//for walker-details and  response
export class walkerDetails{
    code?: number;
    data?:
     {
        UserDetails?:{
            email?:string;
            phoneNumber?:string;
            AboutSelf?:string;
            IdCardImage?:string;
            Images?:string[];
            Name?:string;
            Profile?:string;
            userId?:string;
            Role?:string;
            TotalPet?:string;
        },
        promptDetails:[{
            PromptAnswer?:string;
            createdAt?:string;
            promptsTitle?:string;
        }]
    };
    status?: boolean
}

//for response of walker-details in owner-details
export class walkerUserDetails{
    email?:string;
            phoneNumber?:string;
            AboutSelf?:string;
            IdCardImage?:string;
            Images?:string[];
            Name?:string;
            Profile?:string;
            userId?:string;
            Role?:string;
            TotalPet?:string;
}