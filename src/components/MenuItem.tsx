import { IMenuItem } from "@/utils/interfaces"
import { useState } from "react"
import MenuItemList from "./MenuItemsList";

const MenuItem = ({itemTitle, itemBranch}: IMenuItem) =>{

  const [isHover, setIsHover]= useState<boolean>(false);
  console.log(itemBranch);
  return (
    <div className="w-[150px] flex justify-center items-center h-[50px] border-2 border-gray-500" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {itemTitle}
      {Object.keys(itemBranch).length !=0 && isHover? <MenuItemList itemList={itemBranch} /> :""}
    </div>
  )
}

export default MenuItem 