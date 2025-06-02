import React, { useContext } from 'react';
import './Style.css';
import { CartContext } from '../Component/CartContext';

const Addcart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div style={{ paddingTop: "100px" }}>
            <h1>Your Cart</h1>
            <div className="product-container">
                {cart.map((item, index) => (
                    <div key={index} className="product-card">
                        <h2 style={{fontSize: '25px'}}>{item.name}</h2>
                        <img src={item.image} alt={item.name} />
                        <p><i>₹{item.price}</i></p>
                        <p>{item.description}</p>
                        <span>{item.category}</span>
                        <br /><br />
                        <button
                            className="btn delete"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Addcart;
