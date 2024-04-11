import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { PC } from '../shared/models/PC';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(part: PC): void { 
    let cartItem = this.cart.items.find(item => item.part.id === part.id);
    if (cartItem) 
      return;
    this.cart.items.push(new CartItem(part));
    this.setCartToLocalStorage();
  }

  removeFromCart(partId: string): void {
    this.cart.items = this.cart.items.filter(item => item.part.id !== partId);
    this.setCartToLocalStorage();
  }

  changeQuantity(partId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.part.id === partId);
    if (!cartItem) {
      return;
    } 
    cartItem.quantity = quantity;
    cartItem.price = cartItem.part.price * quantity;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((acc, item) => acc + item.price, 0);
    this.cart.totalCount = this.cart.items.reduce((acc, item) => acc + item.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
