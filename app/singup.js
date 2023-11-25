'use client'
import React, { useState, useEffect } from 'react';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };

    const form = document.getElementById('signup-form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <>
      <div style={styles.container}>
        <form id="signup-form" style={styles.form}>
          <h2 style={styles.heading}>Sign Up</h2>
          <label style={styles.label}>
            Username:
            <input style={styles.input} type="text" required />
          </label>
          <label style={styles.label}>
            Email:
            <input style={styles.input} type="email" required />
          </label>
          <label style={styles.label}>
            Password:
            <div style={styles.passwordContainer}>
              <input
                style={styles.input}
                type={showPassword ? 'text' : 'password'}
                required
              />
              <span
                style={styles.eyeIcon}
                onClick={handleTogglePassword}
                role="img"
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-sharp fa-solid fa-eye-slash"></i>
                )}
              </span>
            </div>
          </label>
          <button style={styles.button} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
  },
  form: {
    width: '700px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '50px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '26px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  },

  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    top: '43%',
    right: '15px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },
};

export default SignUp;
