import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public nameOfProduct = '';
  constructor() {}
  public scrollTo(target: HTMLElement): void {
    console.log(this.nameOfProduct);
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
