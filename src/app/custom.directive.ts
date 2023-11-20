import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}


  @HostListener('mouseenter') onMouseEnter() {
    // Mouse elemanın üzerine gelince çalışacak kod
    this.renderer.setStyle(this.el.nativeElement, "background-color", "orange");
    console.log('Mouse giriş');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Mouse elemanın üzerinden çıkınca çalışacak kod
    this.renderer.setStyle(this.el.nativeElement, "background", "none");
    console.log('Mouse çıkış');
  }

  @Input() set appCustom(data: any) {
    if(data){
      this.renderer.setStyle(this.el.nativeElement, "font-size", "20px",);
    }else{
      this.renderer.setStyle(this.el.nativeElement, "color", "red");
    }
    
  }


}
