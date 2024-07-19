import type { DrawerItems, MenuItems } from './types'

const drawerItems: DrawerItems = [
  {
    title: 'Заявки',
    value: 'orders',
    icon: 'mdi-receipt-text-edit-outline'
  },
  {
    title: 'Помощь',
    value: 'help',
    icon: 'mdi-help-circle-outline'
  },
  {
    title: 'Сообщения',
    value: 'messages',
    icon: 'mdi-message-text-outline'
  },
  {
    title: 'Войти',
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
