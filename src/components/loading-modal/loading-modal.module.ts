import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingModal } from './loading-modal';

@NgModule({
  declarations: [
    LoadingModal,
  ],
  imports: [
    IonicPageModule.forChild(LoadingModal),
  ],
  exports: [
    LoadingModal
  ]
})
export class LoadingModalModule {}
