import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  pizzasList: {
    id: number;
    image: string;
    name: string;
    ingredients: string;
  }[] = [
    {
      id: 1,
      image: '',
      name: 'Мясная Делюкс',
      ingredients:
        'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    },
    {
      id: 2,
      image: '',
      name: 'Морская Премиум',
      ingredients: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    },
    {
      id: 3,
      image: '',
      name: 'Бекон и Сосиски',
      ingredients: 'Бекон, сыр, сосиски, ананас, томатная паста',
    },
    {
      id: 4,
      image: '',
      name: 'Куриная Делюкс',
      ingredients:
        'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    },
    {
      id: 5,
      image: '',
      name: 'Барбекю Премиум',
      ingredients:
        'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    },
    {
      id: 6,
      image: '',
      name: 'Пепперони Дабл',
      ingredients: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    },
    {
      id: 7,
      image: '',
      name: 'Куриное трио',
      ingredients: `Жареная курица, Тушеная курица,
    Куриные наггетсы, перец, сыр, грибы, соус для пиццы`,
    },
    {
      id: 8,
      image: '',
      name: 'Сырная',
      ingredients: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    },
  ];
}
