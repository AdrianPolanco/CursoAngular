import { Directive, ElementRef, Host, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DescriptionDetailsComponent } from '../components/description-details/description-details.component';

@Directive({
  selector: '[ellipsis]',
  providers: [DialogService]
})
export class EllipsisDirective implements OnInit {
  @Input({ required: false }) maxChars = 20;
  @Input() content!: string;
  private truncated: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.applyEllipsis();
  }

  @HostListener('click')
  onClick(): void {
    if (this.truncated) this.openDialog();
  }

  private applyEllipsis(): void {
    if (this.content.length > this.maxChars) {
      this.truncated = true;
      this.renderer.setProperty(
        this.el.nativeElement,
        'textContent',
        `${this.content.substring(0, this.maxChars)}...`
      );
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    } else {
      this.truncated = false;
      this.renderer.setProperty(
        this.el.nativeElement,
        'textContent',
        this.content
      );
    }
  }

  private openDialog(): void {
     this.dialogService.open(DescriptionDetailsComponent, {
       header: 'Descripción completa',
       width: '65%',
       data: {
         content: this.content,
       },
     });
  }
}
