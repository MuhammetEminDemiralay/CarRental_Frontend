import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStoppropagation]'
})
export class StoppropagationDirective {

  constructor() { }

  @HostListener("click", [`$event`]) OnClick(e : Event){
    e.stopPropagation();
  }

}
