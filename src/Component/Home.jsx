import React from 'react';

const Home = () => {
  const containerStyle = {
    marginTop: '100px',
    padding: '60px 30px',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
    background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
    color: '#2c3e50',
    borderRadius: '16px',
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
  };

  const headingStyle = {
    fontSize: '3.2rem',
    marginBottom: '20px',
    color: '#333',
    textShadow: '1px 1px 4px rgba(0,0,0,0.1)',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: '40px',
    color: '#555',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const sectionStyle = {
    textAlign: 'left',
    maxWidth: '800px',
    margin: '40px auto',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333',
  };

  const sectionHeading = {
    fontSize: '1.4rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#444',
  };

  const highlight = {
    color: '#4a90e2',
    fontWeight: 600,
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🛍️ Welcome to ProductHub</h1>
      <h3 style={subheadingStyle}>
        Your all-in-one solution to <span style={highlight}>manage products</span> effortlessly. Whether you're building an e-commerce platform or learning full-stack development, this project is built to deliver both functionality and experience.
      </h3>

      <div style={sectionStyle}>
        <div style={sectionHeading}>🚀 Features:</div>
        <ul>
          <li><span style={highlight}>Add Products:</span> Fill out a simple form to add new products with image, name, and price.</li>
          <li><span style={highlight}>View Products:</span> Clean and responsive grid layout to display all products.</li>
          <li><span style={highlight}>Edit/Delete:</span> Instantly update or remove any product using quick action buttons.</li>
          <li><span style={highlight}>Mock Backend:</span> All data is managed via JSON Server for realistic functionality.</li>
          <li><span style={highlight}>Cart Simulation:</span> Add items to cart to simulate shopping experience.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <div style={sectionHeading}>📱 Responsive Design:</div>
        This app is fully optimized for mobile, tablet, and desktop. The navbar includes a toggle menu on smaller screens, and the layout adjusts to give users a smooth experience everywhere.
      </div>

      <div style={sectionStyle}>
        <div style={sectionHeading}>🛠️ Tech Stack Used:</div>
        <ul>
          <li><span style={highlight}>Frontend:</span> React.js, React Router, Bootstrap (optional), Custom CSS</li>
          <li><span style={highlight}>Backend:</span> JSON Server (local REST API)</li>
          <li><span style={highlight}>Deployment:</span> Render / GitHub Pages (as preferred)</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <div style={sectionHeading}>💡 Ideal For:</div>
        <ul>
          <li>Learning CRUD operations using React</li>
          <li>Creating small e-commerce admin panels</li>
          <li>Showcasing frontend/backend skills in portfolio</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
