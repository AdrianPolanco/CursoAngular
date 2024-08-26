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
import { FavoriteDirective } from './directives/favorite.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorDirective } from './directives/form-error.directive';


@NgModule({
  declarations: [
    UploadImagePageComponent,
    GalleryPageComponent,
    LayoutComponent,
    PhotoCardComponent,
    FavoritesPageComponent,
    DetailsComponent,
    FavoriteDirective,
    FormErrorDirective
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class GalleryModule { }