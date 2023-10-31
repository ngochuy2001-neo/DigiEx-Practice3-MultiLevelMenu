"use client"
import Image from 'next/image'
import { TREE_STRUCTURE } from '@/utils/structures'
import MenuItemList from '@/components/MenuItemsList'

export default function Home() {
  const renderList = Object.keys(TREE_STRUCTURE)
  return (
    <div className='w-screen h-screen static'>
      <MenuItemList itemList={TREE_STRUCTURE} firstFlag={true}/>
    </div>
  )
}