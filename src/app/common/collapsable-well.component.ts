import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div (click)='toggleContent()' class="well pointable">
      <h4 class='well-title'> {{title}} </h4>
      <ng-content *ngIf='visible'></ng-content>
    </div>
  `,
  selector: 'collapsable-well'
})
export class CollapsableWellComponent {

    @Input() title: string;
    visible: boolean = true;

    toggleContent() {
      this.visible = !this.visible;
    }

}
