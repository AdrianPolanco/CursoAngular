import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() altText: string = "";

  ngOnInit(): void {
    if(!this.imageUrl)throw new Error('imageUrl property is required.');
  }
}
