import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor(private elementRef : ElementRef, private renderer : Renderer2 ) { }
  
  @HostListener('click') OnClick(){

    const hasClass = this.elementRef.nativeElement.classList.contains('visibility');
    if(hasClass){
      this.renderer.removeClass(this.elementRef.nativeElement, "visibility");
    }else{
      this.renderer.addClass(this.elementRef.nativeElement, "visibility"); 
    }


 
  }
}
