import { Component, Input, ViewChild, ElementRef, Injector, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'simple-modal',
  template: `
    <div id='{{elementId}}' #modalcontainer class='modal fade' tabindex="-1">
      <div  class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button type="button" class="close" data-dismiss='modal'><span>X</span></button>
            <h4 class='modal-title'>{{ title }}</h4>
          </div>
        <div class='modal-body' (click)='click()'>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll;}
  `]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnModalBodyClick: string;
  @ViewChild('modalcontainer') containerEl: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any ) {}

  click() {
    if (this.closeOnModalBodyClick === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
