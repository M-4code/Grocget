export class product {
    id: number;
    name: string;
    price: number;
    prodCatId: number;
}

export class cart {
    id: number;
    productList: product[];
    user: user;
}

export class ProdCategory {
    id: number;
    name: string;
}

export class user {
    loginName: string;
    password: string;
    name: number;
    address: string;
    phoneNumber: string;
    pincode: string;
}

