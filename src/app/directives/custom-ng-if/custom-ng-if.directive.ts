import {Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]'
})
export class CustomNgIfDirective implements OnInit, OnChanges {
  @Input() appCustomNgIf: boolean;
  ngOnInit(): void {
    // this.container.createEmbeddedView(this.template);
  }

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.container.clear();
    console.log(this.appCustomNgIf);
    if (this.appCustomNgIf) {
      this.container.createEmbeddedView(this.template);
    }
  }

}
