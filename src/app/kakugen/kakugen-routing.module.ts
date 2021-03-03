import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KakugenPage } from './kakugen.page';

const routes: Routes = [
  {
    path: '',
    component: KakugenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KakugenPageRoutingModule {}
