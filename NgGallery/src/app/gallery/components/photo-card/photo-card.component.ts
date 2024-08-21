import { Component, Input, output, Output} from '@angular/core';
import { Photo } from '../../types/photo.type';

@Component({
  selector: 'gallery-photo-card',
  templateUrl: './photo-card.component.html',
  styles: ``
})
export class PhotoCardComponent {
  @Input() photo!: Photo;
  onPhotoClicked = output<Photo>();

  emitPhotoClickedEvent() {
    this.onPhotoClicked.emit(this.photo);
  }
}
