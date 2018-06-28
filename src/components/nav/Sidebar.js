import React from "react";

export default function Sidebar(props) {
  let hidden = props.menu? "Sidebar" : "Sidebar hidden"
  return (
    <div className={hidden}>
      <div className="menuIcon menu">
        <img
          src="https://shop.ccs.com/media/wysiwyg/mobile-nav-home.gif"
          alt="Home Icon"
        />
        <p>
        <strong>Home</strong>
        <span> sweet home</span></p>
      </div>
      <div className="menuIcon menu">
        <img
          src="https://shop.ccs.com/media/wysiwyg/mobile-nav-account.gif"
          alt="login icon"
        />{" "}
        <strong>Log In / Sign Up</strong>
      </div>
      <div className="menu">
        <strong>Skateboards</strong>
      </div>
      <div className="menu">
        <strong>Customer Service</strong>
      </div>
      <div className="socialMedia">
      <div>
        <img
          src="https://shop.ccs.com/media/wysiwyg/mobile-nav-facebook.gif"
          alt="facebook login"
        />
        <img
          src="https://shop.ccs.com/media/wysiwyg/mobile-nav-twitter.gif"
          alt="twitter login"
        />
        <img
          src="https://shop.ccs.com/media/wysiwyg/mobile-nav-youtube.gif"
          alt="youtube login"
        />
        <img
          src="https://shop.ccs.com/media/wysiwyg/mobile-nav-instagram.gif"
          alt="instagram login"
        />
        <img
          src="https://shop.ccs.com/media/wysiwyg/mobile-nav-google.gif"
          alt="google login"
        />
        </div>
        <div><p><span>about us</span> | <span>privacy policy</span> | <span>Terms of use</span></p></div>
      </div>
    </div>
  );
}
