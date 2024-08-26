import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[fileSelected]'
})
export class FileSelectedDirective {

  @Output() fileSelected = new EventEmitter<File>();

  @HostListener('change', ['$event'])
  emitFile(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.fileSelected.emit(input.files[0]);

    }
  }
}
