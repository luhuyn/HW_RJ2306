import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './App.css';

const SEX_LIST = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
];

const App = () => {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;
    setForm({
      ...form,
      [event.target.name]: value
    });
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = 'Required';
    }
    if (!values.idNumber) {
      errors.idNumber = 'Required';
    }
    if (!values.yearOfBirth) {
      errors.yearOfBirth = 'Required';
    } else if (values.yearOfBirth <= 1900) {
      errors.yearOfBirth = 'Year of birth must be greater than 1900';
    }
    if (!values.nationality) {
      errors.nationality = 'Required';
    }
    if (!values.province) {
      errors.province = 'Required';
    }
    if (!values.district) {
      errors.district = 'Required';
    }
    if (!values.ward) {
      errors.ward = 'Required';
    }
    if (!values.address) {
      errors.address = 'Required';
    }
    if (!values.phone) {
      errors.phone = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    const errors = handleValidate(values);
    if (Object.keys(errors).length === 0) {
      alert('Declaration successful');
      resetForm();
    } else {
    }
  };

  return (
    <div className="container">
      <h1>Health Declaration</h1>
      <Formik
        initialValues={{
          fullname: '',
          idNumber: '',
          yearOfBirth: '',
          gender: '',
          nationality: '',
          province: '',
          district: '',
          ward: '',
          address: '',
          phone: '',
          email: '',
          symptoms: [],
          contacts: []
        }}
        validate={handleValidate}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, { resetForm });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label>Full Name:</label>
              <Field type="text" name="fullname"/>
              {errors.fullname && touched.fullname && <div className="error">{errors.fullname}</div>}
            </div>

            <div className="form-group">
              <label>Passport/ID Number:</label>
              <Field type="text" name="idNumber"/>
              {errors.idNumber && touched.idNumber && <div className="error">{errors.idNumber}</div>}
            </div>

            <div className="form-group">
              <label>Year of Birth:</label>
              <Field type="number" name="yearOfBirth"/>
              {errors.yearOfBirth && touched.yearOfBirth && <div className="error">{errors.yearOfBirth}</div>}
            </div>

            <div className="form-group">
              <label>Gender:</label>
              {SEX_LIST.map(sex => (
                <div key={sex.value}>
                  <label>
                    <Field type="radio" name="gender" value={sex.value} checked={form.gender === sex.value} onChange={handleChange} />
                    {sex.label}
                  </label>
                </div>
              ))}
            </div>

            
            <div className="form-group">
              <label>Address in Vietnam:</label>
              <div>
                <label>Tỉnh/Thành phố:</label>
                <Field type="text" name="province" />
                {errors.province && touched.province && <div className="error">{errors.province}</div>}
              </div>
              <div>
                <label>Quận/Huyện:</label>
                <Field type="text" name="district" />
                {errors.district && touched.district && <div className="error">{errors.district}</div>}
              </div>
              <div>
                <label>Phường/Xã:</label>
                <Field type="text" name="ward"/>
                {errors.ward && touched.ward && <div className="error">{errors.ward}</div>}
              </div>
              <div>
                <label>Số nhà, đường:</label>
                <Field type="text" name="address"/>
                {errors.address && touched.address && <div className="error">{errors.address}</div>}
              </div>
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <Field type="text" name="phone" />
              {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label>Email:</label>
              <Field type="text" name="email"/>
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <h2>Trong vòng 14 ngày qua, Anh/chị có thấy xuất hiện dấu hiệu nào sau đây không?</h2>
              <div>
                <label>
                  <Field type="checkbox" name="symptoms" value="Fever" checked={form.symptoms && form.symptoms.includes('Fever')} />
                  Fever
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="symptoms" value="Cough" checked={form.symptoms && form.symptoms.includes('Cough')}/>
                  Cough
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="symptoms" value="Shortness of breath" checked={form.symptoms && form.symptoms.includes('Shortness of breath')}/>
                  Shortness of breath
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="symptoms" value="Pneumonia" checked={form.symptoms && form.symptoms.includes('Pneumonia')}  />
                  Pneumonia
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="symptoms" value="Sore throat" checked={form.symptoms && form.symptoms.includes('Sore throat')}  />
                  Sore throat
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="symptoms" value="Fatigue" checked={form.symptoms && form.symptoms.includes('Fatigue')} />
                  Fatigue
                </label>
              </div>
            </div>

            <div className="form-group">
              <h2>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với?</h2>
              <div>
                <label>
                  <Field type="checkbox" name="contacts" value="Person with suspected or confirmed COVID-19" checked={form.contacts && form.contacts.includes('Person with suspected or confirmed COVID-19')} />
                  Person with suspected or confirmed COVID-19
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="contacts" value="Person from a country with COVID-19" checked={form.contacts && form.contacts.includes('Person from a country with COVID-19')} />
                  Person from a country with COVID-19
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="contacts" value="Person with symptoms (Fever, cough, etc.)" checked={form.contacts && form.contacts.includes('Person with symptoms (Fever, cough, etc.)')}  />
                  Person with symptoms (Fever, cough, etc.)
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
