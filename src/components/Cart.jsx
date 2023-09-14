import PropTypes from 'prop-types';

function Cart({ cartItems, removeFromCart }) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    quantity: PropTypes.number
};

export default Cart;
