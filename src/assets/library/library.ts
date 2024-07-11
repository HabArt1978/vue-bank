import type { DrawerItems, MenuItems } from './types'

const drawerItems: DrawerItems = [
  {
    title: 'Home',
    value: 'home',
    icon: 'mdi-home-city'
  },
  {
    title: 'About Me',
    value: 'about-me',
    icon: 'mdi-forum'
  },
  {
    title: 'Login',
    value: 'login',
    icon: 'mdi-login'
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
