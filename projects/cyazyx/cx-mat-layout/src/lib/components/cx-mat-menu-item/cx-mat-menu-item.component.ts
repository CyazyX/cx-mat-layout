import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NavigationItem } from '../../models';

@Component({
  selector: 'cx-mat-menu-item',
  templateUrl: './cx-mat-menu-item.component.html'
})
export class CxMatMenuItemComponent implements OnChanges {
  /**
   * The navigation item we are rendering.
   */
  @Input()
  navigationItem: NavigationItem;
  /**
   * The currently selected navigation items.
   */
  @Input()
  selectedItems: NavigationItem[] | undefined;
  /**
   * The current menu level of the menus
   */
  @Input()
  level = 1;
  /**
   * Whether we are displaying the full width version of the menu or not. Depending on like mobile rendering.
   */
  @Input()
  fullWidth = false;
  /**
   * Whether the parent node is expanded or not.
   */
  @Input()
  isParentExpanded = false;

  isExpanded = false;
  isSelected = false;
  classes: { [index: string]: boolean };

  constructor() { }

  ngOnChanges(): void {
    if (this.selectedItems) {
      this.isSelected = this.selectedItems.indexOf(this.navigationItem) !== -1; // this node is the selected node or its ancestor
      this.isExpanded = this.navigationItem.children && this.isSelected || (this.fullWidth && this.isExpanded);
    } else {
      this.isSelected = false;
    }

    this.setClasses();
  }

  /**
   * Retrieves the navigation item children
   */
  public get navigationItemChildren(): NavigationItem[] {
    return this.navigationItem && this.navigationItem.children ? this.navigationItem.children.filter(n => !n.hidden) : [];
  }

  /**
   * Update the classes as well as the ones we currently have.
   */
  setClasses() {
    this.classes = {
      [`level-${this.level}`]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected
    };
  }

  /**
   * When we click the navigation item.
   * @param $event The event that initiated this call.
   */
  menuHeaderClicked($event: MouseEvent) {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
    // For navigation items that have children and still set `url`, prevent
    // navigating to the url.
    $event.preventDefault();
  }
}
