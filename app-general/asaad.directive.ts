import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[asaad]'
})
export class AsaadDirective {

  constructor(
    private hostElement: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input() asaad: any = 'yellow';
  @HostBinding('style.color') elementColor: any;
  @HostListener('click') foo() {
    // console.log(`clicked`)
    // this.hostElement.nativeElement.style.color = 'red'; // not safe
    // this.renderer.setStyle(this.hostElement.nativeElement, 'color', 'green')
    this.elementColor = this.asaad;
  }
}
