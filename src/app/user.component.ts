import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <!-- <input type='text' [(ngModel)]='name'> -->
  <input type='text' (input)='onUserInput($event)' [value]='name'>
  <p>Hello {{ name }}!</p>
  <p>I'm the User Component</p>
  <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name: string;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event: any) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value)
  }
}
