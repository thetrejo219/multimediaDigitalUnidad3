import { CartItem, Item } from '@/types'
import {create} from 'zustand'

interface Store{
    cart:CartItem[]
    addToCart: (item: Item) => void
    increaseQuantity:(id:number)=>void
    decreaseQuantity:(id:number)=>void
    total:number
}



const useStore = create<Store>((set,get)=>({
    cart:[],
    total:0,
    addToCart:(item)=>{
        const existingItem = get().cart.find(i=>i.id===item.id)
        if(existingItem){
            set({
                cart:get().cart.map(i=>
                    i.id===item.id?{...i,quantity:i.quantity+1}:i
                )
            })
        }else{
            set({
                cart:[...get().cart,{...item,quantity:1}]
            })
        }

        set({total:calculateTotal(get().cart)})
    },
    increaseQuantity:(id)=>{
        set({
            cart:get().cart.map(item=>
                item.id===id?{...item,quantity:item.quantity+1}:item
            )
        })
        set({total:calculateTotal(get().cart)})
    },
    decreaseQuantity:(id)=>{
        set({
            cart:get().cart.map(item=>
                item.id===id?{...item,quantity:item.quantity-1}:item
            )
            .filter(item=>item.quantity>0)
        })
        set({total:calculateTotal(get().cart)})
    }
    
}))

const calculateTotal=(cart:CartItem[]):number=>{
    return cart.reduce((sum,item)=>sum+item.price*item.quantity,0)
}

export default useStore