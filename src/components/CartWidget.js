import React from 'react'

function CartWidget () {
    return(
        <>
        <div className="cartContainer">
        <img src="../../cart.svg" alt="Logo" width="30" height="24"/>
        <span className="cartCount">2</span>
        </div>
        </>
    )
}

export default CartWidget