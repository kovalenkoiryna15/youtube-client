import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import Classes from 'src/app/shared/constants/colorize-by-publish-date';

@Directive({
  selector: '[appColorizeByPublishDate]',
})
export default class ColorizeByPublishDateDirective implements OnInit {
  @Input('appColorizeByPublishDate') date?: string;

  public classes = Classes;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    this.assignClass();
  }

  assignClass(): void {
    if (this.date && !Number.isNaN(Date.parse(this.date))) {
      const msInOneDay = 24 * 60 * 60 * 1000;

      if (Date.parse(this.date) > Date.now() - msInOneDay * 7) {
        this.renderer2.addClass(this.elementRef.nativeElement, Classes.Recent);
      } else if (Date.parse(this.date) > Date.now() - msInOneDay * 30) {
        this.renderer2.addClass(
          this.elementRef.nativeElement,
          Classes.LessThanMonth
        );
      } else {
        this.renderer2.addClass(this.elementRef.nativeElement, Classes.LongAgo);
      }
    } else {
      this.renderer2.addClass(this.elementRef.nativeElement, Classes.LongAgo);
    }
  }
}
