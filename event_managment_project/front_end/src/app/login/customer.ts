export class Customer {

    customerId:number
    customerName:string
    customerEmail:string
    customerPassword:string
}

export class Events{
    eventId: number;  
    eventName: string;
    image:string;
}

export class Products{

    productId:number;
    productName:string;
    productPrice:number;
    image:string;
  checked: any;

}

export class Services{

    serviceId:number
    serviceName:string
    serviceProducts:Products

}

export class Cart{
    cartId:number
    cartProducts:string
    total:number
}
