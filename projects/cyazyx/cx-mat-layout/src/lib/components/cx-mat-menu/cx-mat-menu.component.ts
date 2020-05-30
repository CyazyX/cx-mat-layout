import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NavigationItem } from '../../models';

@Component({
  selector: 'cx-mat-menu',
  templateUrl: './cx-mat-menu.component.html'
})
export class CxMatMenuComponent implements OnInit, OnChanges {
  /**
   * The list of menu items to display
   */
  @Input()
  navigationItems: NavigationItem[];
  /**
   * Currently selected navigation items.
   */
  @Input()
  selectedItems: NavigationItem[] | undefined;
  /**
   * Whether it's a full-width display for the menu.
   */
  @Input()
  fullWidth = false;

  // Filtered navigation items with correct display state.
  filteredNavigationItems: NavigationItem[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.filteredNavigationItems = this.navigationItems ? this.navigationItems.filter(menu => !menu.hidden) : [];
   }
}
