import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LogoComponent } from './components/logo/logo.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [CardComponent, LogoComponent, ModalComponent],
  imports: [CommonModule],
  exports: [CardComponent, LogoComponent, ModalComponent],
})
export class SharedModule {}
