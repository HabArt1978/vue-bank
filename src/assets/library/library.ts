import type { DrawerItems, MenuItems } from './types'

const drawerItems: DrawerItems = [
  {
    title: 'Home',
    value: 'home',
    icon: 'mdi-home-city'
  },
  {
    title: 'Account',
    value: 'account',
    icon: 'mdi-account'
  },
  {
    title: 'Account-group',
    value: 'account-group',
    icon: 'mdi-account-group-outline'
  },
  {
    title: 'About Me',
    value: 'about me',
    icon: 'mdi-forum'
  }
]

const menuItems: MenuItems = [
  {
    title: 'Toggle theme',
    value: 'toggle-theme',
    icon: 'mdi-theme-light-dark'
  },
  {
    title: 'Search',
    value: 'search',
    icon: 'mdi-magnify'
  },
  {
    title: 'Filter',
    value: 'filter',
    icon: 'mdi-filter'
  }
]

export { drawerItems, menuItems }
