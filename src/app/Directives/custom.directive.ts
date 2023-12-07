import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @Input() highlightColor: string = 'yellow';

  @Input() set appCustom(state: boolean) {
    if(state === true){
          this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "#89fc00");
    }else{
      this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "#ff5555");
    }
  }

  


}
