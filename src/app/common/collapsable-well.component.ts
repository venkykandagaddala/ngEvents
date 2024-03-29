import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div (click)='toggleContent()' class="well pointable">
      <h4><ng-content select="[well-title]"></ng-content>
       </h4>
      <ng-content *ngIf='visible' select='[well-body]'></ng-content>
    </div>
  `,
  selector: 'collapsable-well'
})
export class CollapsableWellComponent {

    @Input() title: string;
    visible = true;

    toggleContent() {
      this.visible = !this.visible;
    }

}
