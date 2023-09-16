import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('menu__toggle') toggle!: ElementRef;


  constructor() {}
  ngOnInit(): void {}

  close() {
    this.toggle.nativeElement.checked = false;
  }

  ngAfterViewInit(): void {
  }
}
