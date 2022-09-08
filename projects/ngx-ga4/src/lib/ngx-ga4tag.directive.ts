import { Directive, Input,AfterViewInit,ElementRef , Renderer2} from '@angular/core';
import { NgxGa4Service } from './ngx-ga4.service';

@Directive({
  selector: '[gtagEvent]'
})
export class NgxGa4tagDirective implements AfterViewInit {
  /** HTML DOM Event */
  @Input() trackOn?: string;
  /** event name for ga4 event */
  @Input() action?: string;
  /** param for ga4 event */
  @Input() params?: object;

  constructor(
    private ga4service: NgxGa4Service,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    try {
      if (!!this.trackOn && !!this.action) {
        this.renderer.listen(this.el.nativeElement, this.trackOn, () => {
          this.ga4service.event(this.action! || this.trackOn!, {
            ...this.params
          });
        });
      }
    } catch (err) {
      throw err;
    }
  }
}
