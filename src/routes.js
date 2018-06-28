import React from 'react'
import {Route} from 'react-router-dom'
import Skateboard from './components/skateboards/Skateboard'
import Cart from './components/cart/Cart'

export default (
    <div>
    <Route exact path='/' component={Skateboard}/>
    <Route path='/api/cart' component={Cart}/>
    </div>
)