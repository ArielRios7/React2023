import React from 'react'

function CartWidget () {
    return(
        <>
        <div className="cartContainer">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <span className="cartCount">2</span>
        </div>
        </>
    )
}

export default CartWidget