import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface cartData {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity:number,
  totalprice:number,
}

// Define the initial state using that type
const initialState: cartData[]  = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
       addtoCart(state,action){
        const newObj= {...action.payload};
        state.push(newObj);  
       },
       removeFromCart(state, action: PayloadAction<number>) {  
        return state.filter(item => item.id !== action.payload); 
      },


      addcart(state, action){
        const obj=state.find((val)=>val.id === action.payload.id);
        if(obj){
          ++obj.quantity
        const newstate = state.filter((val)=>val.id !== obj.id);
        state= [...newstate,obj];
        return;
        }
      },


    decrementCart(state, action: PayloadAction<number>) {
      const obj = state.find((val) => val.id === action.payload);
      if (obj && obj.quantity > 1) {
        --obj.quantity;
        const newstate = state.filter((val) => val.id !== obj.id);  
        state= [...newstate, obj]; 
        return;
      }
    },

  },
})

export const { addtoCart, removeFromCart, addcart, decrementCart} = cartSlice.actions

export default cartSlice.reducer;