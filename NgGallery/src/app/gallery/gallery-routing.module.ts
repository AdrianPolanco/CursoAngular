import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { UploadImagePageComponent } from './pages/upload-image-page/upload-image-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "images", component: GalleryPageComponent },
      { path: "upload", component: UploadImagePageComponent },
      {path: "favorites", component: FavoritesPageComponent},
      { path: "**", redirectTo: "images" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
