import { IMenuItem } from "@/utils/interfaces"
import { useState } from "react"
import MenuItemList from "./MenuItemsList";

const MenuItem = ({itemTitle, itemBranch}: IMenuItem) =>{

  const [isHover, setIsHover]= useState<boolean>(false);
  return (
    <div className="w-[150px] flex justify-center items-center h-[50px] border-black border-2" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {itemTitle}
      {Object.keys(itemBranch).length !=0 && isHover? <MenuItemList itemList={itemBranch} /> :""}
    </div>
  )
}

export default MenuItem 