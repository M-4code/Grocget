export class product {
    id: number;
    name: string;
    price: number;
}

export class cart {
    id: number;
    product: product;
    user: user;
}

export class user {
    loginName: string;
    password: string;
    name: number;
    address: string;
    phoneNumber: string;
    pincode: string;
}

