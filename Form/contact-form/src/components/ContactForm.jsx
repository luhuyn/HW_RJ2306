import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import '../components/ContactForm.css';
const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    // Do something with the form data (e.g., submit to a server)
    // For this example, we'll just show an alert and set submitSuccess to true
    alert('Add contact successfully!!!');
    setSubmitting(false);
    setSubmitSuccess(true);
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
