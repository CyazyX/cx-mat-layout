import { Component, OnInit, Input, ViewChild, HostListener, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationItem } from '../models';

@Component({
  selector: 'cx-mat-layout',
  templateUrl: './cx-mat-layout.component.html'
})
export class CxMatLayoutComponent implements OnInit {
  /**
   * The list of menu items to display
   */
  @Input()
  navigationItems: NavigationItem[];
  /**
   * Whether to display the menu and content side-by-side or as an overlay
   */
  isSideBySide = true;
  /**
   * The minimum width to support side-by-side sidenav and content
   */
  private sideBySideWidth = 992;
  /**
   * Binding to the class
   */
  @HostBinding('class')
  hostClasses = '';
  /**
   * The sidenav component within our page
   */
  @ViewChild(MatSidenav, { static: true })
  sidenav: MatSidenav;
  /**
   * Whether to display the opened side nav or not.
   */
  get isOpened() { return this.isSideBySide; }
  /**
   * The sidenav mode, determined based on the state of whether to render side-by-side.
   */
  get mode() { return this.isSideBySide ? 'side' : 'over'; }

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isSideBySide = width >= this.sideBySideWidth;

    if (this.isSideBySide) {
      this.sidenav.toggle(false);
    }
  }

  updateSideNav() {
    // May be open or closed when wide; always closed when narrow.
    this.sidenav.toggle(this.isSideBySide && this.sidenav.opened);
  }

  updateHostClasses() {
    const sideNavOpen = `sidenav-${this.sidenav.opened ? 'open' : 'closed'}`;

    this.hostClasses = [
      sideNavOpen,
    ].join(' ');
  }

  updateShell() {
    // Update the SideNav state (if necessary).
    this.updateSideNav();

    // Update the associated classes
    this.updateHostClasses();
  }
}
