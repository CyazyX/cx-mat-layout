import { Component, OnInit, Input, ViewChild, HostListener, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationItem } from '../models';
import { CxMatLayoutService } from '../services';

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
   * The color attribute for the top navigation toolbar. Defaults to `primary`.
   */
  @Input()
  topnavColor = 'primary';
  /**
   * The color attribute for the top progress bar. Defaults to `warn`.
   */
  @Input()
  topProgressBarColor = 'warn';
  /**
   * The title to display on the toggle of the sidebar.
   */
  @Input()
  sidenavToggleTitle = 'Side Menu';
  /**
   * The position of the top nav
   */
  @Input()
  topnavPosition: 'fixed' | 'relative' = 'fixed';
  /**
   * Whether we are currently loading to display top loader.
   * The top nav has been configured with toggle button fort the sidenav.
   */
  @Input()
  showTopNav = true;
  /**
   * Whether to display the menu and content side-by-side or as an overlay
   */
  isSideBySide = true;
  /**
   * The minimum width to support side-by-side sidenav and content
   */
  private sideBySideWidth = 892;
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

  constructor(public layoutService: CxMatLayoutService) { }

  ngOnInit(): void {
    setTimeout(() => this.onResize(window.innerWidth), 200);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isSideBySide = width >= this.sideBySideWidth;
    this.sidenav.toggle(this.isSideBySide && this.sidenav.opened);
  }

  updateHostClasses() {
    const sideNavOpen = `sidenav-${this.sidenav.opened ? 'open' : 'closed'}`;

    this.hostClasses = [
      sideNavOpen,
    ].join(' ');
  }
}
