export class totalJob{
    code?: number;
    data?: {
        PetDetails: [
            {
                jobId: string,
                DogName: string,
                Time: string,
                OwnerName: string,
                WalkerName: string,
                Title: string
            }
            
        ]
    };
    status?: boolean
}