export interface IMenuItem {
  itemTitle: string,
  itemBranch: MenuItems;
}

type MenuItems = {
  [key: string]: MenuItems;
}

export interface IMenuItemsList{
  itemList: MenuItems,
  firstFlag?: boolean,
}