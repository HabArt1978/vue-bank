import type { DrawerItems, MenuItems } from './types'

const drawerItems: DrawerItems = [
  {
    title: 'Список заявок',
    value: 'Orders',
    icon: 'mdi-receipt-text-edit-outline'
  },
  {
    title: 'Помощь',
    value: 'Help',
    icon: 'mdi-help-circle-outline'
  },
  {
    title: 'Сообщения',
    value: 'Messages',
    icon: 'mdi-message-text-outline'
  },
  {
    title: 'Войти',
    value: 'Login',
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
