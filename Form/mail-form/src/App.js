import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const validationSchema = Yup.object().shape({
  to: Yup.string().matches(REGEX.email, 'Invalid email address').required('Required'),
  title: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const App = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // time to send email(2s)
    setTimeout(() => {
      alert('Sent successfully!!!');
      setSubmitting(false); // stop submitting status to submit again
      resetForm(); // Reset form
    }, 2000);
  };

  return (
    <div className="App">
      <h1>Mail Form</h1>
      <Formik
        initialValues={{ to: '', title: '', message: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="to">To:</label>
              <Field type="text" name="to" id="to" className="form-control" />
              <ErrorMessage name="to" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <Field type="text" name="title" id="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <Field as="textarea" name="message" id="message" className="form-control" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="file">Choose file:</label>
              <input type="file" name="file" id="file" className="form-control" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
