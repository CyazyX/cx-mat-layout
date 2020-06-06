import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavigationItem } from '../../models';

/**
 * The Side navigation menu container and handler.
 * You can directly use this to define the sidenav in your own container when not using
 * `cx-mat-layout`.
 * @since 0.0.1
 */
@Component({
  selector: 'cx-mat-menu',
  template: `
  <cx-mat-menu-item *ngFor="let navigationItem of filteredNavigationItems;" [navigationItem]="navigationItem"
    [selectedItems]="selectedItems" [fullWidth]="fullWidth">
  </cx-mat-menu-item>
  `
})
export class CxMatMenuComponent implements OnInit, OnChanges {
  /**
   * The list of menu items to display
   */
  @Input()
  navigationItems: NavigationItem[];
  /**
   * Whether it's a full-width display for the menu.
   */
  @Input()
  fullWidth = false;

  // Filtered navigation items with correct display state.
  filteredNavigationItems: NavigationItem[];
  /**
   * The currently selected navigation items.
   * Builds up the navigation tree from the current selection.
   */
  selectedItems: NavigationItem[] | undefined;

  private urlSubject = new ReplaySubject<string>(1);

  /**
   * The full URL of the current navigation including search and hash.
   * Stripped the leading and trailing slash, if any, conveniently.
   */
  currentUrl = this.urlSubject
    .pipe(map(url => this.stripSlashes(url)));

  /**
   * Only the URL without search and hash.
   * Necessary when evaluating only the bit of core navigation changes.
   */
  currentPath = this.currentUrl.pipe(
    map(url => (url.match(/[^?#]*/) || [])[0])
  );

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.urlSubject.next(this.location.path(true));

    this.location.onUrlChange(url => this.urlSubject.next(url));

    // Subscribe to changes with the URL.
    this.currentUrl.subscribe(url => this.buildSelectedItems(url));
  }

  ngOnChanges(): void {
    this.filteredNavigationItems = this.navigationItems ? this.navigationItems.filter(menu => !menu.hidden) : [];
  }

  /**
   * Removes leading and trailing slashes from the URL path.
   * If the `URL` contains `#` and/or `/` then the last slash before these is also removed.
   * @param url The current page `URL` we are processing.
   */
  private stripSlashes(url: string): string {
    return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  }

  /**
   * Builds the selected items from the current URL.
   * @param url The current document URL.
   */
  private buildSelectedItems(url: string) {
    const selectedItemsLocal: NavigationItem[] = [];
    this.navigationItems.forEach(navItem => this.browseNavigationItems(url, selectedItemsLocal, navItem));
    if (selectedItemsLocal) {
      this.selectedItems = selectedItemsLocal;
    }
  }

  private browseNavigationItems(
    url: string, currentSelectedItems: NavigationItem[], navigationItem: NavigationItem, parentItems: NavigationItem[] = []) {
    const nodeUrl = navigationItem.url;
    const parents = [navigationItem, ...parentItems];
    if (nodeUrl) {
      const cleanedNodeUrl = nodeUrl.replace(/^\/+/, '').replace(/\/$/, '');
      if (cleanedNodeUrl === url && currentSelectedItems.indexOf(navigationItem) === -1) {
        parents.forEach(navItem => currentSelectedItems.push(navItem));
      }
    }
    if (navigationItem.children) {
      navigationItem.children.forEach(navItem => this.browseNavigationItems(url, currentSelectedItems, navItem, parents));
    }
  }
}
