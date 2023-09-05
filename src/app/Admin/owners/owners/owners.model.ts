export class owners{
    code?: number;
    data?: {
        totalOwners?: [
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
    export class ownersList{
        [index:number]:{
            userId?: string,
            firstName?: string,
            lastName?: string,
            email?: string,
            phoneNumber?: string
        }
    }