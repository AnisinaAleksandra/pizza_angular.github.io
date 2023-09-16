import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [CardComponent, LogoComponent],
  imports: [CommonModule],
  exports: [CardComponent, LogoComponent],
})
export class SharedModule {}
