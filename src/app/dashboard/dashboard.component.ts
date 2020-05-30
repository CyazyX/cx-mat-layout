import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '@cyazyx/cx-mat-layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menus: NavigationItem[];

  constructor() { }

  ngOnInit(): void {
    this.menus = [
      { id: 'abcs', title: 'Home' },
      {
        id: 'cs', title: 'Services', children: [
          { id: 'cs.a', title: 'Buying' },
          { id: 'cs.b', title: 'Selling' },
        ]
      },
      { id: 'dss', title: 'Company', matIcon: 'favorite' },
      {
        id: 'ess', title: 'Settings', matIcon: 'bookmark', children: [
          {
            id: 'ess.1', title: 'Branch', children: [
              { id: 'ess.1.1', title: 'Locations' },
              { id: 'ess.1.2', title: 'Regions' }
            ]
          },
          { id: 'ess.2', title: 'Comparisons' }
        ]
      },
    ];
  }

}
