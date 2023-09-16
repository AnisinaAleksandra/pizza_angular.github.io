import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() item: {
    id: number;
    image: string;
    name: string;
    ingredients: string;
 } = {
     id: 0,
    image:'',
    name:'',
    ingredients:'',
  };
imageFolderPath: string = '';
  ngOnInit(): void {
    this.imageFolderPath = `background-image: url(assets/images/${this.item!.image})`;
  }
}
 
  