import React from 'react'
import "./Home.css"
import banner from "../images/banner.jpg"
import Product from './Product'
import Header from './Header'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='home flex justify-center mx-auto max-w-[1500px]'>
      <div className='home_container'>
        <img className='w-full mb-[-140px] home__image' src={banner} />
        <div className='home_row flex z-[1] mx-[50px]'>
          <Product key={5} id ={1} title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses..." img='https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg' rating={4} price={19.99} />
          <Product key={6} id ={2} title="SINGER | M1000.662 Sewing Machine - 32 Stitch Applications - Mending Machine - Simple..." img='https://m.media-amazon.com/images/I/51CAFG8V1jL._AC_UL320_.jpg' rating={4} price={84.99} />
        </div>
        <div className='home_row flex z-[1] mx-[50px]'>
          <Product key={1} id ={3} title="Beats Studio Buds - True Wireless Noise Cancelling Earbuds - Compatible with Apple..." img='https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_SL1500_.jpg' rating={5} price={49.99} />
          <Product key={2} id ={4} title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management,..." img='https://m.media-amazon.com/images/I/51MUa0WUSKL._AC_UY218_.jpg' rating={4} price={29.99} />
          <Product key={3} id ={5} title="SAMSUNG Galaxy A13 LTE Cell Phone, Factory Unlocked Android Smartphone, 32GB..." img='https://m.media-amazon.com/images/I/61JfY-8odVL._AC_SL1200_.jpg' rating={4} price={189.99} />
        </div>
        <div className='home_row flex z-[1] mx-[50px]'>
          <Product key={4} id ={6} title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120HZ..." img='https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SL1500_.jpg' rating={4} price={1049.99} />
          </div>
      </div>
    </div>
    </>
  )
}

export default Home
