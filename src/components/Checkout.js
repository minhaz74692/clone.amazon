import React from 'react'
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './context/StateProvider'
import Header from './Header';
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
    <Header/>
    <div className='py-[15px] bg-[rgb(234,237,237)]'>
      <div className='flex'>
        <div className='ml-5 flex flex-col justify-center'>
          <img className='w-full' src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt='Ad' />
          <h2 className='text-3xl font-bold text-center'>Your Shopping Basket</h2>

          {
            basket.map((item, index)  =>{
              return (
              <CheckOutProduct
                id={item.id} 
                title={item.title} 
                img ={item.img} 
                rating = {item.img} 
                price = {item.price} 
              />
              )
            })
          }
        </div>
        <div>
          <Subtotal />
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout
