import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public subjectNameOfProduct: Subject<string> = new Subject<string>();
  public nameOfProduct = '';
  constructor(private http: HttpClient) {}
  public scrollTo(target: HTMLElement): void {
    this.subjectNameOfProduct.next(this.nameOfProduct);
    target.scrollIntoView({ behavior: 'smooth' });
  }

  //fake test request

  public createOrder(data: {
    productTitle: string | null;
    adress: string | null;
    phone: string | null;
  }) {
    return this.http.post<{ result: boolean }>('https://fakeAddress.com', data);
  }
}
