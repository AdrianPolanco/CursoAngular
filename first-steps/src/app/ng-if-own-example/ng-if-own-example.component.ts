import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-if-own-example',
  templateUrl: './ng-if-own-example.component.html',
  styleUrls: ['./ng-if-own-example.component.css'],
})
export class NgIfOwnExampleComponent {
  //@ViewChild('content_paragraph') contentParagraph!: ElementRef;
  message: string = 'This message is NOW editable';
  editable: boolean = true;
  content: string = 'Some content';

  changeEditability(): void {
    this.editable = !this.editable;
    if (this.editable) {
      this.message = 'This message is NOW editable';
    } else {
      this.message = 'This message is NOT editable';
    }
  }
}
