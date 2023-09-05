export class walkWithPet{
    code?: number;
    data?: {
        PetDetails: [
            {
                DogName: string,
                date: string,
                Time: string,
                OwnerName: string,
                OwnerContact: number
            }
        ],
        PetInfo: {
            pottyTime: string,
            pooingTime: string,
            Images: string[],
            pickupLogistics: string,
            DropOffLogistics: string,
            Description:string 
        },
        WalkerData: {
            WalkerName: string,
            City: string,
            WalkerContactNumber: number,
            Address: string,
            Lat: number,
            Long: number,
            Review: {
                age: null,
                dogBreed: null,
                gender: null,
                location: null,
                rating: null
            }
        },
        review: {
            OwnerReview: {
                ownerRate: number[],
                ownerReview: string,
            },
            WalkerReview: {
                walkerRate: number[]
                walkerReview: string
            }
        }
    };
    status?: boolean
}
export class petDetails{
DogName?:string;
OwnerContact?:number;
OwnerName?:string;
Time?:string;
date?:string
}
export class updatedWalkerData{
City?:string;
Lat?:number;
Long?:number;
WalkerContactNumber?:number;
WalkerName?:string
}
export class petInfo{
Description?: string;
DropOffLogistics?: string;
Images?: string[];
pickupLogistics?: string;
pooingTime?: string;
pottyTime?: string
}
export class walkerData{
    Address?:string;
City?:string;
Lat?:number;
Long?:number;
Review?:
{age: null, dogBreed: null, gender: null, location: null, rating: null}
WalkerContactNumber?:number;
WalkerName?:string
}