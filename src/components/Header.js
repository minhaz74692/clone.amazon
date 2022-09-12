import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './context/StateProvider';

const Header = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className="sticky top-[0px] z-[1000]">
            <div className="header h-[55px] flex items-center bg-[#121921] w-full">
                <div className="header_logo w-[100px] object-contain my-0 mx-[18px] mt-[10px]">
                    <Link to="/">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon_logo" />
                    </Link>
                </div>
                <div className='header_search flex flex-1 items-center rounded-[24px]' >
                    <input type="text" className='header_searchInput h-[36px] p-[10px] border-none rounded-l-[2px] w-full' />
                    <SearchIcon className='header_searchIcon bg-[#cd9042] rounded-r-[2px] !h-[24px] p-[2px] rounded-l-[2px] scale-150' />
                </div>
                <div className="header_nav flex text-white justify-evenly ml-2">
                    <Link to="/logIn">
                        <div className="nav_option1 flex flex-col mx-[10px]">
                            <span className='text-[10px]'>Hello</span>
                            <span className='text-[13px] font-[800]'>Sign in</span>
                        </div>
                    </Link>s
                    <div className="nav_option2 flex flex-col mx-[10px]">
                        <span className='text-[10px]'>Returns</span>
                        <span className='text-[13px] font-[800]'>& Orders</span>
                    </div>
                    <div className="nav_option3 flex flex-col mx-[10px]">
                        <span className='text-[10px]'>Your</span>
                        <span className='text-[13px] font-[800]'>Prime</span>
                    </div>
                    <div className='basket flex items-center'>
                        <Link to='/checkout'><ShoppingBasketIcon className='mr-1' /></Link>
                        <span className='text-[13px] font-[800] mr-2'>{basket?.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
