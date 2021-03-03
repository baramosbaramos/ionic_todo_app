import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KakugenPageRoutingModule } from './kakugen-routing.module';

import { KakugenPage } from './kakugen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KakugenPageRoutingModule
  ],
  declarations: [KakugenPage]
})
export class KakugenPageModule {}
