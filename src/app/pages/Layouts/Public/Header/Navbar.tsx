import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../../../routes/AppRoutes";
import './navbar.scss';
import appsettings from "../../../../configs/appsettings";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/en.png" alt="English flag" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <div className="items-menu">
              <div>
                <NavLink className='link' to={`${AppRoutes().products.allCategories}/1`}>
                  Women
                </NavLink>
              </div>
              <div>
                <NavLink className='link' to={`${AppRoutes().products.allCategories}/2`}>
                  Men
                </NavLink>
              </div>
              <div>
                <NavLink className='link' to={`${AppRoutes().products.allCategories}/3`}>
                  Children
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <NavLink className='link' to={AppRoutes().home.home}>{appsettings.appName}</NavLink>
        </div>
        <div className="right">
          <div className="item">
            <NavLink className='link' to={AppRoutes().home.home}>Homepage</NavLink>
          </div>
          <div className="item">
            <NavLink className='link' to={AppRoutes().home.home}>About</NavLink>
          </div>
          <div className="item">
            <NavLink className='link' to={AppRoutes().home.home}>Contact</NavLink>
          </div>
          <div className="item">
            <NavLink className='link' to={AppRoutes().home.home}>Stores</NavLink>
          </div>
        <div className="icons">
          <SearchIcon/>
          <PersonOutlineIcon/>
          <FavoriteBorderIcon/>
          <div className="cartIcon">
            <ShoppingCartOutlinedIcon/>
            <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
