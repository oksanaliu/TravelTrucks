import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css';
import { useState } from 'react';

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s]+$/, 'Name can only contain letters')
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date().required('Booking date is required'),
  comment: Yup.string()
    .min(10, 'Comment too short')
    .max(300, 'Comment too long'),
});

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          name: '',
          email: '',
          date: null,
          comment: '',
        }}
        validationSchema={BookingSchema}
        onSubmit={(values, actions) => {
          console.log('Form data:', values);
          setSubmitted(true);
          actions.resetForm();
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            <label className={styles.label}>Name*</label>
            <Field name="name" className={styles.input} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />

            <label className={styles.label}>Email*</label>
            <Field name="email" type="email" className={styles.input} />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <label className={styles.label}>Booking date*</label>
            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue('date', date)}
              dateFormat="dd.MM.yyyy"
              placeholderText="Select a date"
              className={styles.input}
            />
            <ErrorMessage
              name="date"
              component="div"
              className={styles.error}
            />

            <label className={styles.label}>Comment</label>
            <Field
              name="comment"
              as="textarea"
              rows="4"
              className={styles.textarea}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={styles.error}
            />

            <button type="submit" className={styles.submitButton}>
              Send
            </button>

            {submitted && (
              <p className={styles.success}>Form submitted successfully!</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
