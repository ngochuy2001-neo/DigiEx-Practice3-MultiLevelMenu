import { IMenuItemsList } from "@/utils/interfaces";
import MenuItem from "./MenuItem";

const MenuItemList = ({itemList, firstFlag}: IMenuItemsList) => {
  const items = Object.keys(itemList);
  return (
    <div className="absolute" style={firstFlag? {} : {transform: "translateX(100%)"}}>
      {items.map((value, index) => (
        <MenuItem itemTitle={value} itemBranch={itemList[value]} key={index}/>
      ))}
    </div>
  )
}

export default MenuItemList;