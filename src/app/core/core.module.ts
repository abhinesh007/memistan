import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';



@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MainNavComponent],
})
export class CoreModule { }
