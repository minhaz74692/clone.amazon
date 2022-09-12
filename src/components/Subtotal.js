import React from 'react';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './context/reducer';
import { useStateValue } from './context/StateProvider';

const Subtotal = () => {
  const [{basket}] = useStateValue();
  console.log(getBasketTotal(basket));
  // let total = ()=>{
  //   let tot = 0;
  //   for(let i=0; i<basket.length ; i++){
  //       tot = tot+ basket[i].price;
  //   }
  //   return tot;
  // }
  // total();
  return (
    <div className='flex flex-col justify-between w-[350px] mx-5 h-auto p-[20px] bg-[#f3f3f3] border border-[1px] border-[#dddddd] rounded-[3px] sticky top-[65px]'>
        <CurrencyFormat 
        renderText={(value)=>(
            <>
            <p className='text-2xl'>
                Subtotal ({basket?.length} items):
                <strong> {value}</strong>
            </p>
            <small className='flex items-center'>
                <input className='mr-[5px]' type="checkbox" /> This order contains gift
            </small>
            <button className='bg-[#f0c14b] border border-1 border-black rounded text-[#111] font-semibold my-2'>Proceed to checkout</button>
            </>
        )} 
        decimalScale = {2} 
        value ={getBasketTotal(basket)} 
        displayType = {"text"} 
        thousandSeparator = {true} 
        prefix = {"$"}
        />

    </div>
  )
}

export default Subtotal
