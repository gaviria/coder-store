import React from 'react'
import { itemType, itemListType } from '../types/ItemList'
import Item from './Item'

type Props = {
    itemList: itemListType
}

const ItemList = ({itemList}: Props) => {
  console.log("🚀 ~ file: ItemList.tsx:10 ~ ItemList ~ itemList", itemList)
  return (
    <div className='h-4/5 flex items-center justify-center gap-4 flex-wrap mb-12'>
        { itemList.map((item: itemType)=>
            <Item 
                key={item.id}
                item={item}
            />
            )
        }
    </div>
  )
}

export default ItemList