import { Component, OnInit } from '@angular/core';
import { Product } from '../types/product.type';
import { CartService } from '../service/cart-service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public nameOfProduct: string = this.cartService.nameOfProduct;
  public imagePath: string = '../../assets/images/pizza_big.png';
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  pizzasList: Product[] = [
    {
      id: 1,
      image: '../../assets/images/pizzaOne.png',
      name: 'Мясная Делюкс',
      ingredients:
        'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    },
    {
      id: 2,
      image: '../../assets/images/pizzaTwo.png',
      name: 'Морская Премиум',
      ingredients: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    },
    {
      id: 3,
      image: '../../assets/images/pizzaThree.png',
      name: 'Бекон и Сосиски',
      ingredients: 'Бекон, сыр, сосиски, ананас, томатная паста',
    },
    {
      id: 4,
      image: '../../assets/images/pizzaFour.png',
      name: 'Куриная Делюкс',
      ingredients:
        'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    },
    {
      id: 5,
      image: '../../assets/images/pizzaFive.png',
      name: 'Барбекю Премиум',
      ingredients:
        'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    },
    {
      id: 6,
      image: '../../assets/images/pizzaSix.png',
      name: 'Пепперони Дабл',
      ingredients: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    },
    {
      id: 7,
      image: '../../assets/images/pizzaSeven.png',
      name: 'Куриное трио',
      ingredients: `Жареная курица, Тушеная курица,
    Куриные наггетсы, перец, сыр, грибы, соус для пиццы`,
    },
    {
      id: 8,
      image: '../../assets/images/pizzaEight.png',
      name: 'Сырная',
      ingredients: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    },
  ];
}
