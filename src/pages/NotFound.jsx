import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
};

// Styles for the NotFound component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
  },
  title: {
    fontSize: '5rem',
    margin: 0,
  },
  message: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default NotFound;
