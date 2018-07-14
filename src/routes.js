import React from "react";
import { Route } from "react-router-dom";
import Skateboard from "./components/products/Skateboard";
import Cart from "./components/cart/Cart";
import Landing from "./components/landing/Landing";
import QuickView from "./components/products/QuickView";
import Checkout from "./components/cart/Checkout";
import Thankyou from "./components/cart/Thankyou";

export default (
  <div>
    <Route exact path="/" component={Landing} />
    <Route path="/skateboards" component={Skateboard} />
    <Route path="/cart" component={Cart} />
    <Route path="/item/:id" component={QuickView} />
    <Route exact path="/checkout" component={Checkout} />
    <Route path="/checkout/thankyou" component={Thankyou} />
  </div>
);
