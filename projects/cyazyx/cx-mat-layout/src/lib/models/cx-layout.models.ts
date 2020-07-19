// Module models

/**
 * Navigation item for storing the `URL` parts to be placed in the navigation menu.
 */
export interface NavigationItem {
    /**
     * `Required`.
     * Could be any string to allow for easy tracking of the menu items.
     * If not set, we set it internally to be able to track the menus.
     */
    id?: string;
    /**
     * `Required`.
     * The title to display to the user.
     */
    title: string;
    /**
     * The `URL` to navigate to, could be undefined when
     * it's just used as a dropdown.
     */
    url?: string;
    /**
     * Whether to match the URL of the children. When true, this will be marked
     * as active when the children's URL is starts with the parent one.
     * @since 1.0.2
     */
    matchChildren?: boolean;
    /**
     * Tooltip text for the menu, if necessary.
     */
    tooltip?: string;
    /**
     * Any material icon to use for this menu.
     */
    matIcon?: string;
    /**
     * An icon, based on css display to be used.
     */
    icon?: string;
    /**
     * An image url to the icon icon.
     */
    iconUrl?: string;
    /**
     * Any `css` classes to attach to the menu item.
     */
    classes?: string;
    /**
     * Whether the menu item is currently hidden or not.
     */
    hidden?: boolean;
    /**
     * Whether to open the link in new tab.
     */
    openInNewTab?: boolean;
    /**
     * Material badge to display atop the navigation time.
     */
    matBadge?: string;
    /**
     * Material color of the badge background.
     */
    matBadgeColor?: string;
    /**
     * The children for this navigation item.
     */
    children?: NavigationItem[];
}

