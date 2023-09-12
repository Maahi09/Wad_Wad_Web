export class walkers{
    code?: number;
    data?: {
        totalWalkers?: [
            {
                userId?: string,
                firstName?: string,
                lastName?: string,
                email?: string,
                phoneNumber?: string
            }
        ]
    };
    status?: boolean
    }
    export class walkersList{
        [index:number]:{
            userId?: string,
            firstName?: string,
            lastName?: string,
            email?: string,
            phoneNumber?: string
        }
    }