import React, { useEffect, useState, useContext } from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Component/CartContext';
import { Bars } from 'react-loader-spinner';

function Product() {

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => { setProducts(data); setLoading(false); })
      .catch(err => { console.log(err); setLoading(false); });
  }, [])

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

  function handleAddToCart(product) {
    addToCart(product);
    navigate('/addcart');
  }

  function handleDelete(productId) {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'DELETE'
    })
      .then(res => {
        res.ok && setProducts(prev => prev.filter(p => p.id !== productId));

      })
      .catch(err => console.log('Error deleting product:', err));
  }

  function handleEdit(product) {
    navigate('/addproduct', { state: { productToEdit: product } });
  }

  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>All Products</h1>

      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <div style={{ display: 'inline-block' }}>
          <label htmlFor="categoryFilter" style={{ marginRight: '10px', fontWeight: 'bold' }}>
            Filter by Category:
          </label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: '5px 10px', fontSize: '16px' }}
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Gaming Accessories">Gaming Accessories</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Bars height="80" width="80" color="blue" />
        </div>
      ) : (
        <div className="product-container">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <h2 style={{ fontSize: '25px' }}>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <p><i>₹{product.price}</i></p>
              <p>{product.description}</p>
              <span>{product.category}</span>

              <div className="button-group">
                <button className="btn add" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button className="btn edit" onClick={() => handleEdit(product)}>Edit</button>
                <button className="btn delete" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product