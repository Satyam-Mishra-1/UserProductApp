import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9000/product/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PRODUCT LIST</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td style={styles.tableCell}>{product.name}</td>
              <td style={styles.tableCell}>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.buttonContainer}>
        <Link to="/products/update" style={styles.link}>
          <button style={styles.button}>Update Product</button>
        </Link>
        <Link to="/products/remove" style={styles.link}>
          <button style={styles.button}>Delete Product</button>
        </Link>
        <Link to="/products/create" style={styles.link}>
          <button style={styles.button}>Create Product</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0", // Updated background color
    color: "#333", // Updated text color
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#007bff", // Accent color for headings
  },
  table: {
    width: "80%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    textAlign: "center",
  },
  tableCell: {
    padding: "12px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#007bff", // Accent color for buttons
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
};

// Add hover effect
styles.button[':hover'] = {
  backgroundColor: '#0056b3', // Darker blue on hover
};

export default ProductList;
