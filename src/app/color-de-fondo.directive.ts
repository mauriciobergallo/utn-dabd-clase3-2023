import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[divColorDeFondo]'
})
export class ColorDeFondoDirective implements OnInit {
  @Input() divColorDeFondo: string = 'blue';


  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.divColorDeFondo || 'blue';
    this.el.nativeElement.style.color = 'white';
  }

}
