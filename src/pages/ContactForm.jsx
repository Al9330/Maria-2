import React, { useState } from 'react';
import MarImage from '../assets/Maria.gif'; 
import { Roll } from 'react-reveal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '800px', margin: '20px auto 0 auto' }}>
        <form onSubmit={handleSubmit} style={{ flex: '1', marginRight: '20px' }}>
          <div className="form-group">
            <label htmlFor="name" style={{ marginBottom: '5px', display: 'block' }}>Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ marginBottom: '5px', display: 'block' }}>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{ marginBottom: '5px', display: 'block' }}>Text:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Enviar</button>
        </form>
        <Roll bottom>
          <img src={MarImage} alt="Maria" style={{ maxWidth: '400px' }} /> 
        </Roll>
      </div>
      {/* Footer */}
      <footer className="footer bg-dark fixed-bottom d-flex justify-content-center align-items-center">
        <a href="https://github.com/Pilar1936" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
      </footer>
    </div>
  );
};

export default ContactForm;
