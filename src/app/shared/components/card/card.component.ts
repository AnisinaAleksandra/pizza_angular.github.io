import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart-service';
import { Product } from 'src/app/types/product.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: Product = {
    id: 0,
    image: '',
    name: '',
    ingredients: '',
  };
  @Input()
  target!: HTMLElement;
  imageFolderPath: string = '';
  constructor(private serviceAddToCartService: CartService) {}
  ngOnInit(): void {
    this.imageFolderPath = `background-image: url(assets/images/${
      this.item!.image
    })`;
  }

  serviceAddToCart(productName: string, target: HTMLElement) {
    this.serviceAddToCartService.nameOfProduct = productName;
    this.serviceAddToCartService.scrollTo(target);
  }
}
