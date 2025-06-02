import React from 'react';
import './Style.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <>
      <div className='page-container'>
        <h1>Welcome to Product Management App</h1>
        <br /><br />
        <h3>This app helps you easily manage your products.</h3>

        <ul>
          <li>View all products</li>
          <li>Add new products</li>
          <li>Edit or delete products</li>
          <li>Add to Cart Products</li>
          <li>Navigate using the navbar above</li>
        </ul>

        <br /><br />
        <h3>Use the navigation bar to start managing your products.</h3>
      </div>

      <footer className="bg-dark text-white mt-5 py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>PiYuu$h ⚡</h5>
              <p>Full-Stack Developer | Portfolio Project</p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">Home</a></li>
                <li><a href="/Product" className="text-white">Product</a></li>
                <li><a href="/Addproduct" className="text-white">Add Product</a></li>
                <li><a href="/Addcart" className="text-white">Add to Cart</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p>Email: baradpiyush2528@gmail.com</p>
              <p>Instagram: @_.piyush.006 ⚡</p>
            </Col>
          </Row>
          <hr className="border-light" />
          <p className="text-center mb-0">&copy; 2025 PiYuu$h. All rights reserved.</p>
        </Container>
      </footer>
    </>
  )
}

export default Home;
