type DrawerItems = DrawerItem[]
type MenuItems = MenuItem[]

interface DrawerItem {
  title: string
  value: string
  icon: string
}

interface MenuItem {
  title: string
  value: string
  icon: string
}

export type { DrawerItems, MenuItems }
