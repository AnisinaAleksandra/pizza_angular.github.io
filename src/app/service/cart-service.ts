import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public subjectNameOfProduct: Subject<string> = new Subject<string>();
  public nameOfProduct = '';
  constructor() {}
  public scrollTo(target: HTMLElement): void {
    this.subjectNameOfProduct.next(this.nameOfProduct);
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
