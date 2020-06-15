import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CxMatLayoutService {
  /**
   * Whether to display the top loading progress bar or not.
   *
   * To show the loader, emit `true`, `false` to hide it.
   *
   * @example In your component file:
   * `
   * constructor(private layoutService: CxMatLayoutService) { }
   *
   * ngOnInit(): void {
   *  this.layoutService.isLoadingContent.next(true); // Show progress bar
   *  // Stuff
   *  this.layoutService.isLoadingContent.next(false); // Hide progress bar
   * }
   * `
   */
  public isLoadingContent = new BehaviorSubject(false);
  constructor() { }
}
