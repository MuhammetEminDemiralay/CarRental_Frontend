import { Directive, ElementRef, Host, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit{

  constructor(private elementRef : ElementRef, private renderer : Renderer2 ) { 
   
  }
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement.nextElementSibling, "visible")
  }

  @HostListener('click') OnClick(){
    
    if(this.elementRef.nativeElement.nextElementSibling.classList.length === 0){
      this.renderer.addClass(this.elementRef.nativeElement.nextElementSibling, "visible");
    }else{
      this.renderer.removeClass(this.elementRef.nativeElement.nextElementSibling, "visible");
    }
  }
}
