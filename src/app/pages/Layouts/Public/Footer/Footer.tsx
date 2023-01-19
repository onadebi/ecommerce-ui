import React from "react";
import appsettings from "../../../../configs/appsettings";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nisi. Sunt at modi numquam neque quis perspiciatis
              laborum ad quae vel cumque, magni fuga, laboriosam molestiae illum
              architecto temporibus soluta.
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda, sint laboriosam tempora, voluptas aspernatur obcaecati aut quos cumque doloribus eveniet quidem doloremque nostrum corrupti, quo repudiandae delectus ducimus. Amet.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">{appsettings.appName}</span>
            <span className="copyright"> &copy; Copyright 2022-{(new Date()).getFullYear()}. All rights reserved.</span>
          </div>
          <div className="right">
            <img src="/images/payment.png" alt="Payments logo" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
