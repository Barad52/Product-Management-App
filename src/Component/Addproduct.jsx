import React, { useEffect, useState } from 'react';
import './Style.css';
import { useLocation } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

  const location = useLocation();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });

  const [updateProduct, setUpdateProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });

  useEffect(() => {
    if (location.state && location.state.productToEdit) {
      setUpdateProduct(location.state.productToEdit);
    }
  }, [location.state]);

  const addPopp = () => {
    toast("👌 Product added Succefully ", {
      theme: "light",
      position: "top-center",
      transition: Bounce
    })
  }

  //  ---- Add Product ----
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        addPopp();
        setProduct({
          name: '',
          price: '',
          description: '',
          image: '',
          category: ''
        });
      })
      .catch(err => console.error(err));
  };

  const updatePop = () => {
    toast("😁 Product Updated Succefully ", {
      transition: Bounce,
      theme: "light",
      position: "top-center"
    })
  }


  // ---- Update Product ----
  const handleUpdateChange = (e) => {
    setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = () => {
    fetch(`http://localhost:3000/products/${updateProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: updateProduct.name,
        price: updateProduct.price,
        description: updateProduct.description,
        image: updateProduct.image,
        category: updateProduct.category
      })
    })
      .then(res => res.json())
      .then(() => {
        updatePop();

        setUpdateProduct({ id: '', name: '', price: '', description: '', image: '', category: '' });
      })
      .catch(err => console.log(err));
  };


  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="add-product-form">
        <h1>Add Product</h1>
        <input name="name" value={product.name} onChange={handleChange} type="text" placeholder='Product Name' />
        <input name="price" value={product.price} onChange={handleChange} type="number" placeholder='Product Price' />
        <input name="description" value={product.description} onChange={handleChange} type="text" placeholder='Description' />
        <input name="image" value={product.image} onChange={handleChange} type="text" placeholder='Image Url' />
        <select name="category" value={product.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Gaming Accessories">Gaming Accessories</option>
          <option value="Mobile">Mobile</option>
        </select>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <div className="add-product-form">
        <h1>Update Product</h1>
        <input name="name" value={updateProduct.name} onChange={handleUpdateChange} type="text" placeholder='Name' />
        <input name="price" value={updateProduct.price} onChange={handleUpdateChange} type="number" placeholder='Price' />
        <input name="description" value={updateProduct.description} onChange={handleUpdateChange} type="text" placeholder='Description' />
        <input name="image" value={updateProduct.image} onChange={handleUpdateChange} type="text" placeholder='Image Url' />
        <select name="category" value={updateProduct.category} onChange={handleUpdateChange}>
          <option value="">Update Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Gaming Accessories">Gaming Accessories</option>
          <option value="Mobile">Mobile</option>
        </select>
        <button onClick={handleUpdateProduct}>Update Product</button>
      </div>
      <ToastContainer />
    </div>
  )
}


export default AddProduct;
