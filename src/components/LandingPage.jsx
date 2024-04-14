import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Admin Panel</h1>
      <div style={styles.buttonsContainer}>
        <Link to="/users" style={styles.link}>
          <button style={styles.button}>User Management</button>
        </Link>
        <Link to="/products" style={styles.link}>
          <button style={styles.button}>Product Management</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0', // Updated background color
    color: '#333', // Updated text color
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#007bff', // Accent color for headings
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    margin: '0 10px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff', // Accent color for buttons
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.2)',
  },
};

// Add hover effect
styles.button[':hover'] = {
  backgroundColor: '#0056b3', // Darker blue on hover
};

export default LandingPage;
