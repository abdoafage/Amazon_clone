import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import "./Header.css";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{Basket,user},dispatch]=useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="Header">
            <Link to="/">
                <img className="Header__logo" src="amazon_PNG25.png"/>
            </Link>
           
           <div className="Header__search">
               <input className="Header__searchInput" type/>
               <SearchIcon className="Header__inputIcon" />
           </div>
           <div className="Header__nav">
               <Link to={!user && "/login"}>
                    <div className="Header__option" onClick={handleAuthentication}>
                        <span className="Header__optionLineOne">Hello { ! user ? "guest": user.email}</span>
                        <span className="Header__optionLineTwo">{user?"Sign Out":"Sign In"}</span>
                    </div>
                </Link>
                <div className="Header__option">
                    <span className="Header__optionLineOne">Returns</span>
                    <span className="Header__optionLineTwo">& Orders</span>
                </div>
                <div className="Header__option">
                    <span className="Header__optionLineOne">Your</span>
                    <span className="Header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="Header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="Header__optionLineTwo Header__basketCount">{Basket.length}</span>
                    </div>
                </Link>
           </div>
        </div>
    )
}

export default Header
