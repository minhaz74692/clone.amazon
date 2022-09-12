import React from 'react';
import { useStateValue } from './context/StateProvider';
import "./Product.css";

const Product = (props) => {
 let {id, title, img ,rating, price} = props;
  const [{basket}, dispatch] = useStateValue();
  const addToBasket =()=>{
    console.log("This is the basket >>>", basket);
      dispatch({
        type: "ADD_TO_BASKET", 
        item: {id, title, img, rating, price}
      });
      // console.log(props);
  }
  return (
    <div className='product flex flex-col items-center justify-end m-[10px] p-[20px] w-full max-h-[380px] min-w-[100px] bg-white z-[1] rounded'>
      <div className='product_info'>
        <p className='font-semibold'>{title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product_rating'>
            <p>{"⭐".repeat(rating)}</p>
        </div>
      </div>
      <img className='max-h-[200px] w-full object-contain mb-[15px]' src={img} alt="book"/>
      <button onClick={addToBasket} className='btn bg-yellow-500 px-2 rounded font-semibold'>Add to Basket</button>
    </div>
  )
}

export default Product
