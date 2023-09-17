import { Component, OnInit } from '@angular/core';
import { Product } from '../types/product.type';
import { CartService } from '../service/cart-service';
import { pizzasList } from './pizzasList';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/custom-validators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private _destroy$ = new Subject();

  public nameOfProduct: string = this.cartService.nameOfProduct;
  public imagePath: string = '../../assets/images/pizza_big.png';
  public pizzasList: Product[] = pizzasList;
  public orderPizzaPathImg: string =
    '../../assets/images/pizzzzzaOrderForm.png';

  public newOrderForm!: { productTitle: ''; adress: ''; phone: '' };

  public orderForm = this.fb.group({
    productTitle: [
      this.nameOfProduct,
      [Validators.required, CustomValidators.productTitleValidator],
    ],
    adress: ['', [Validators.required, Validators.minLength(10)]],
    phone: ['', [Validators.required, CustomValidators.phoneNumberValidator]],
  });
  constructor(public cartService: CartService, private fb: FormBuilder) {
    this.orderForm.valueChanges.subscribe((v: any) => {
      let reg = /[.]/g;
      if (v) {
        this.newOrderForm = {
          productTitle: v.productTitle.replace(reg, ''),
          adress: v.adress.replace(reg, ''),
          phone: v.phone.replace(reg, ''),
        };
        this.orderForm.setValue(this.newOrderForm, {
          emitEvent: false,
          onlySelf: true,
        });
      }
    });
  }

  ngOnInit(): void {
    this.cartService.subjectNameOfProduct.subscribe((nameOfProduct: string) => {
      this.orderForm.patchValue({ productTitle: nameOfProduct });
    });
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  public sendOrder() {
    console.log(this.orderForm.value);
  }
  get phone() {
    return this.orderForm.get('phone');
  }
  get adress() {
    return this.orderForm.get('adress');
  }

  get productTitle() {
    return this.orderForm.get('productTitle');
  }

  ngOnDestroy() {
    this._destroy$.next('');
    this._destroy$.complete();
  }
}
