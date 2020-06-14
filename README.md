# CX Mat Layout

This library provides common layout setup for material menus and content setup. This is a collection of menus (top, sidebar), content area and positioning layouts, etc. With this library, you don't need any template or external dependency as it only depends on `@angular/material`.

## Getting Started

You need `@angular` project to start. Once you setup your Angular project, you can then follow the following steps:

1.  Install cx-mat-layout:
        
        npm i -s @cyazyx/cx-mat-layout`

2.  In the module that you plan to use the layout module, import it, for instance, if you are using `AppModule` as your layout `root`;

        import { CxMatLayoutModule } from '@cyazyx/cx-mat-layout';

3.  In your module `imports`, include the `CxMatLayoutModule`;

        imports: [
            CommonModule,
            CxMatLayoutModule,
            // ...Other imports
        ]

4.  In your `styles.scss`, import our theming file:

        @import '~@cyazyx/cx-mat-layout/styles/cx-mat-layout.style.scss';

    This file is open source and you can customize the styles as you deem fit.

5.  In your `component.ts` file, import:

        import { NavigationItem } from '@cyazyx/cx-mat-layout';`

    This is used to build navigation menu items. See sample code at [GitHub](https://gitbub.com/cyazyx/cx-mat-layout.git) for example navigation items.

6.  Build your menu items, e.g.

        // Define a property for holding menus items
        menus: NavigationItem[];

        // Your ngOnInit lifecycle hook to load the paths
        ngOnInit(): void {
            this.menus = [
                { title: 'Home', url: '/dashboard' },
                {
                    title: 'Services', children: [
                        { title: 'Buying' },
                        { title: 'Selling' },
                    ]
                }
            ];
        }

7.  Update your layout component to include `cx-mat-layout` definitions;

        <cx-mat-layout [navigationItems]="menus">
            <!--Top Menu-->
            <cx-mat-menu-top>
                <div class="menu-part">
                    <a mat-button [routerLink]="'/'" [routerLinkActive]="'active'">
                        <mat-icon>home</mat-icon>
                        <span>Homepage</span>
                    </a>
                    <button mat-button>About Us</button>
                    <button mat-button>Contact Us</button>
                </div>
            </cx-mat-menu-top>
            <!--Every other content is loaded as router-outlet-->
            <router-outlet></router-outlet>
        </cx-mat-layout>

8.  You are all set, you can now focus on building your application, with native material layout instead of focusing on layout issues. 

## Theming

You can theme the layout using the default/ original material theming implementation. The theme implementation has been left to you and by default, everything can be adjusted.

## Contributing

Raise your `issues` and `pull requests` on [GitHub](https://gitbub.com/CyazyX/cx-mat-layout.git)

### What to Contribute

We have different parts you can contribute to. These include:

1.  Package functionality
2.  Tooling improvements
3.  Tests and coverage improvements
4.  Documentation
5.  Customization

### Ask to Contribute

You can also request repository read access at [mail](mailto:mushierc@gmail.com) with the parts you can contribute to and we shall get back to you with more information.
