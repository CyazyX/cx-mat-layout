# CX Mat Layout

This library provides common layout setup for material menus and content setup. This is a collection of menus (top, sidebar), content area and positioning layouts, etc. With this library, you don't need any template or external dependency as it only depends on `@angular/material`.

## Supported Versions

The following are the versions as supported by different `@angular/core` and `@angular/material` packages;

| Package Version | Angular Core Version |
| --------------- | -------------------- |
| 0.919.5         | 9.1.9                |
| 0.9111.1        | 9.1.11               |
| 1.0.0           | 10.0.0               |
| 1.1.0           | 10.0.5               |
| 1.1.2           | 10.1.0               |
| 1.2.0           | 11.0.2               |
| 1.3.2           | 12.0.2               |

## Getting Started

You need `@angular` project to start. Once you setup your Angular project, you can then follow the following steps:

1.  Install cx-mat-layout:
        
        npm i -s @cyazyx/cx-mat-layout

2.  In the module that you plan to use the layout module, import it, for instance, if you are using `AppModule` as your layout `root`;

    ```typescript
        import { CxMatLayoutModule } from '@cyazyx/cx-mat-layout';
    ```

3.  In your module `imports`, include the `CxMatLayoutModule`;

    ```typescript
        imports: [
            CommonModule,
            CxMatLayoutModule,
            // ...Other imports
        ]
    ```

4.  In your `styles.scss`, import our theming file:

    ```scss
        @import '~@cyazyx/cx-mat-layout/styles/cx-mat-layout.style.scss';
    ```

    >   This file is open source and you can customize the styles as you deem fit.

5.  In your `component.ts` file, import:

    ```typescript
        import { NavigationItem } from '@cyazyx/cx-mat-layout';
    ```

    >   This is used to build navigation menu items. See sample code at [GitHub](https://github.com/cyazyx/cx-mat-layout.git) for example navigation items.

6.  Build your menu items, e.g.

    ```typescript
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
    ```

7.  Update your layout component `HTML` to include `cx-mat-layout` definitions;

    ```html
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
    ```

8.  You are all set, you can now focus on building your application, with native material layout instead of focusing on layout issues.

## Usage

The following are the concepts associated with this package definition:

### Components

There are a number of components that make up the package;

1.  **CxMatLayoutComponent** (selector: `cx-mat-layout`) - This is the container for layout items. It allows for the following inputs:
   
    1.  *navigationItems* - For the list of navigation items.
    2.  *topnavColor* - The color attribute of the top navigation bar. Based on angular theming as applied to `mat-toolbar`. Defaults to `primary`.
    3.  *topProgressBarColor* - The progress bar color at the top. Defaults to `warn`.
    4.  *sidenavToggleTitle* - The title string to display on hover of the sidenav toggle.
    5.  *topnavPosition* - The position of the top toolbar. Either `fixed` or `relative`. Defaults to `fixed`.
    6.  *showTopNav* - Whether to display the top navigation toolbar.

2.  **CxMatMenuComponent** (selector: `cx-mat-menu`) - This is the menu componnent that loops through the menu items and renders them. If you have to write your own custom menu item layout, you can use this to display your menu items directly. The following inputs are supported:
    
    1.  *navigationItems* - For the list of navigation items.
    2.  *fullWidth* - Whether we are displaying side by side or whether the menu will be a popover.

    >   Directly using this requires you to write your own layout logic and styling. You can use the existing source code as a starting point.
    
3.  **CxMatMenuItemComponent** (selector: `cx-mat-menu-item`) - This is the menu item renderer that recursivey loops through the menu items and renders them. This component supports the following inputs:

    1.  *navigationItem* - The single navigation item to be displayed.
    2.  *selectedItems* - The list of items that have been selected. This menu item is selected if it's found within the __selectedItems__ array.
    3.  *level* - The menu item level in the tree.
    4.  *fullWidth* - Whether we are displaying side by side or whether the menu will be a popover.
    5.  *isParentExpanded* - Whether the parent node is selected or not.

4.  **CxMatMenuTopComponent** (selector: `cx-mat-menu-top`) - The content holder for top menu toolbar.

### Services

The following are the services defined for the package.

1.  **CxMatLayoutService** - The layout service used for various functionality.


## Theming

You can theme the layout using the default/ original material theming implementation. The theme implementation has been left to you and by default, everything can be adjusted.

## Contributing

Raise your `issues` and `pull requests` on [GitHub](https://github.com/CyazyX/cx-mat-layout.git)

### What to Contribute

We have different parts you can contribute to. These include:

1.  Package functionality
2.  Tooling improvements
3.  Tests and coverage improvements
4.  Documentation
5.  Customization

### Ask to Contribute

You can also request repository read access at [mail](mailto:mushierc@gmail.com) with the parts you can contribute to and we shall get back to you with more information.
