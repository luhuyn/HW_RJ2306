import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import '../components/ContactForm.css';
const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (values, { setSubmitting }) => {
    if (validateForm(values)) {
      alert('Add contact successfully!!!');
      setSubmitting(false);
      setSubmitSuccess(true);
    } else {
      setSubmitting(false);
    }
  };

  const validateForm = (values) => {
    const newErrors = {};

    if (!values.name) {
      newErrors.name = 'Required';
    }

    if (!values.email) {
      newErrors.email = 'Required';
    } else if (!/^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!values.phone) {
      newErrors.phone = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  return (
    <div className="contact-form-container">
      <h1 className="contact-form-title">Contact Form</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>

            {submitSuccess && <div className="success-message">Form submitted successfully!</div>}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
