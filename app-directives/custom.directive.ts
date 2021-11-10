import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[asaad]'
})
export class CustomDirective {
  @Input('shadow') defaultShadow = '1px 1px 5px grey'

  // Bind to a style properties on the host element 
  @HostBinding('style.backgroundColor') myBG: string = '';
  @HostBinding('style.box-shadow') myShadow: string = '';

  // To Listen to Events on the host element 
  @HostListener('mouseenter') foo() { this.e.nativeElement.style.color = 'red'; this.myBG = 'yellow' }
  @HostListener('mouseleave') bar() { this.e.nativeElement.style.color = 'black'; this.myBG = 'white' }

  constructor(private e: ElementRef, private r: Renderer2) {
    // e.nativeElement.style.fontSize = '22px' Bad practice
    r.setStyle(e.nativeElement, 'font-size', '22px')
  }

  ngOnInit() { // read Input() property after constructor
    this.myShadow = this.defaultShadow;
  }

}
