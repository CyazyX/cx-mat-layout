import { Component, OnInit } from '@angular/core';
import { NavigationItem, CxMatLayoutService } from '@cyazyx/cx-mat-layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menus: NavigationItem[];
  dateNow = new Date();
  constructor(private layoutService: CxMatLayoutService) { }

  ngOnInit(): void {
    this.layoutService.isLoadingContent.next(true);
    setTimeout(() => {
      this.menus = [
        { title: 'Home', url: '/dashboard/console' },
        {
          title: 'Services', children: [
            { title: 'Buying' },
            { title: 'Selling' },
          ]
        },
        { title: 'Company', matIcon: 'favorite', url: '/dashboard/company' },
        {
          title: 'Settings', matIcon: 'bookmark', children: [
            {
              title: 'Branches', children: [
                { title: 'Locations', url: '/dashboard/settings/branches/locations' },
                { title: 'Regions' }
              ]
            },
            { title: 'Comparisons', url: '/dashboard/settings/comparisons' }
          ]
        },
      ];
      this.layoutService.isLoadingContent.next(false);
    }, 2000);
  }

}
