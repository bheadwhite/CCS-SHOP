import React from "react";
import { Route } from "react-router-dom";
import Skateboard from "./components/products/Skateboard";
import Cart from "./components/cart/Cart";
import Landing from "./components/landing/Landing"
import QuickView from "./components/products/QuickView"

export default (
  <div>
    <Route exact path="/" component={Landing} />
    <Route path="/api/skateboards" component={Skateboard} />
    <Route path="/api/cart" component={Cart} />
    <Route path="/api/item/:id" component={QuickView} />
  </div>
);
