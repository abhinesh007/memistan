import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';



@NgModule({
  declarations: [GalleryHomeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GalleryHomeComponent
  ]
})
export class GalleryModule { }
