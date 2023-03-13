import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const INITIAL_STATE = {
  cartList:localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')):[],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >=0){
        state.cartList[itemIndex].cartQuantity +=1;
        toast.info(`increased ${state.cartList[itemIndex].name} cart Quantity`,{
          position: 'bottom-left',
        })
      }else{

        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartList.push(tempProduct);
        toast.success(`${action.payload.name} to cart`,{
          position: 'bottom-left',
        })
      }

      localStorage.setItem('cartList',JSON.stringify(state.cartList))

    },
    removeFromCart(state,action){
    const nextCartItem =  state.cartList.filter(
        cartList=>cartList.id !==
         action.payload.id
      )
      state.cartList = nextCartItem
      localStorage.setItem('cartList',JSON.stringify(state.cartList))
      toast.error(`${action.payload.name}removed from cart`,{
        position: 'bottom-left',
      })
    },
     decreaseCart(state,action){
       const itemIndex = state.cartList.findIndex(
        (cartList)=>cartList.id === action.payload.id
       )
       if(state.cartList [itemIndex].cartQuantity>1){
        state.cartList[itemIndex].cartQuantity -=1;
        toast.info(`Decreased${action.payload.name}cart Quantity`,{
          position: 'bottom-left',
        })
       }else if(state.cartList[itemIndex].cartQuantity ===1){
       const nextCartItem =  state.cartList.filter(
        cartList=>cartList.id !==
         action.payload.id
      )
      state.cartList = nextCartItem
      toast.error(`${action.payload.name}removed from cart`,{
        position: 'bottom-left',
      })
    }
      
      localStorage.setItem('cartList',JSON.stringify(state.cartList))
    },
    clearCart(state,action){
      state.cartList =[];
      toast.error(`Cart cleared`,{
        position: 'bottom-left',
      })
      localStorage.setItem('cartList',JSON.stringify(state.cartList))
    },

    getTotals(state,action){
let {total,quantity}= state.cartList.reduce((cartTotal,cartList)=>{
        const {price,cartQuantity}=cartList
        const itemTotal=price * cartQuantity
        cartTotal.total  += itemTotal
        cartTotal.quantity  += cartQuantity



        return cartTotal

       
      },{

        total:0,
        quantity:0
      });
      state.cartTotalQuantity=quantity;
      state.cartTotalAmount=total

    }

  }
});

export const { addToCart,removeFromCart,decreaseCart,clearCart,getTotals } = cartSlice.actions;
export default cartSlice.reducer;
