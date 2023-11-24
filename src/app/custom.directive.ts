import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @Input() highlightColor: string = 'yellow';

  // @HostListener('mouseenter') onMouseEnter() {
  //   // Mouse elemanın üzerine gelince çalışacak kod
  //   this.renderer.setStyle(this.el.nativeElement, "background-color", "orange");
  //   console.log('Mouse giriş');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   // Mouse elemanın üzerinden çıkınca çalışacak kod
  //   this.renderer.setStyle(this.el.nativeElement, "background", "none");
  //   console.log('Mouse çıkış');
  // }

  @Input() set appCustom(state: boolean) {

    if(state === true){
          this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "rgba(46, 225, 52,0.5)");
    }
    // const value = personId % 2 === 1 ? 'blue' : 'red';
    // this.renderer.setStyle(this.el.nativeElement, "color", value);
    // this.renderer.setStyle(this.el.nativeElement, "color", value);
    // if(person % 2 === 1){
    //   this.renderer.setStyle(this.el.nativeElement, "font-size", "100px",);
    //   this.renderer.createElement(`<b>${person}</b>`)
    // }else{
    //   this.renderer.setStyle(this.el.nativeElement, "color", "red");
    // }
    
  }

  


}
