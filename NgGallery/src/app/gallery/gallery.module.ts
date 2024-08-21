import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { UploadImagePageComponent } from './pages/upload-image-page/upload-image-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    UploadImagePageComponent,
    GalleryPageComponent,
    LayoutComponent,
    PhotoCardComponent,
    FavoritesPageComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MaterialModule
  ]
})
export class GalleryModule { }
