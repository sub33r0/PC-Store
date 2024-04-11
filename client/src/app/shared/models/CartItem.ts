import { PC } from "./PC"

export class CartItem{

    constructor(public part: PC){}
    quantity: number = 1;
    price: number = this.part.price;
}