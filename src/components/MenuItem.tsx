import { IMenuItem } from "@/utils/interfaces"
import { useState } from "react"
import MenuItemList from "./MenuItemsList";
import { RiExpandRightFill } from "react-icons/ri"

const MenuItem = ({itemTitle, itemBranch}: IMenuItem) =>{

  const [isHover, setIsHover]= useState<boolean>(false);
  return (
    <div className="w-[150px] flex justify-around h-[50px] border-b-2 border-r-2 border-black" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className="w-full h-full flex justify-around items-center">
        {itemTitle}
        {Object.keys(itemBranch).length != 0? <RiExpandRightFill />: ""}
      </div>
      {Object.keys(itemBranch).length !=0 && isHover? <MenuItemList itemList={itemBranch} /> :""}
    </div>
  )
}

export default MenuItem 