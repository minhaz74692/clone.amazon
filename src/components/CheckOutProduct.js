import React from 'react';
import { useStateValue } from './context/StateProvider';
import "./Product.css";

const CheckOutProduct = ({ id, title, img, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeProduct = () => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }
  return (
    <>
      {/* Product show in basket */}
      <div className='product flex flex-row items-center m-[10px] p-[20px] w-full max-h-[380px] min-w-[100px] bg-white z-[1] w-[60%] mx-auto'>
        <img className='max-h-[200px] w-[60%] object-contain mb-[15px]' src={img} alt="book" />
        <div className='product_info w-[50%]'>
          <p className='font-bold'>{title}</p>
          <p className='product_price font-bold'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product_rating'>
            <p>{"⭐".repeat(rating)}</p>
          </div>
          <button onClick={removeProduct} className='btn bg-[#f0c14b] px-2 rounded font-semibold'>Remove from Basket</button>
        </div>


      </div>
    </>
  )
}

export default CheckOutProduct;

