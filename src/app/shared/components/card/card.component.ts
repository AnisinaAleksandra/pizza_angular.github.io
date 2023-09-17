import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CartService } from 'src/app/service/cart-service';
import { Product } from 'src/app/types/product.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() item: Product = {
    id: 0,
    image: '',
    name: '',
    ingredients: '',
  };
  @Input()
  target!: HTMLElement;
  imageFolderPath: string = '';
  @ViewChild('myImg')
  myImg!: ElementRef;
  constructor(private serviceAddToCartService: CartService) {}
  ngOnInit(): void {
    this.imageFolderPath = `background-image: url(assets/images/${
      this.item!.image
    })`;
  }
  ngAfterViewInit() {
    console.log(this.myImg.nativeElement);
  }
  serviceAddToCart(productName: string, target: HTMLElement) {
    this.serviceAddToCartService.nameOfProduct = productName;
    this.serviceAddToCartService.scrollTo(target);
  }

  openFullScreenImage() {
    if (this.myImg.nativeElement.requestFullscreen) {
      this.myImg.nativeElement.requestFullscreen();
    } else if (this.myImg.nativeElement.webkitRequestFullscreen) {
      this.myImg.nativeElement.webkitRequestFullscreen();
    } else if (this.myImg.nativeElement.msRequestFullscreen) {
      this.myImg.nativeElement.msRequestFullscreen();
    }
  }
}
