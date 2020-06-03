import { Component, OnInit } from '@angular/core';

/**
 * Top navbar container for menus and any content.
 * Declared in `cx-mat-layout` to define top navigation content, if any.
 */
@Component({
  selector: 'cx-mat-menu-top',
  template: `<ng-content></ng-content>`
})
export class CxMatMenuTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
