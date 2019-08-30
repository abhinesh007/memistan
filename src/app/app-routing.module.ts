import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryHomeComponent } from './gallery/gallery-home/gallery-home.component';

const routes: Routes = [
  { path: '', component: GalleryHomeComponent, pathMatch: 'full' },
  // { path: 'abc',  component: CreateviewComponent,   pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
