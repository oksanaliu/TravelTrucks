import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css';
import { toast } from 'react-toastify';

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s]+$/, 'Name can only contain letters')
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date()
    .required('Booking date is required')
    .min(new Date(), 'You cannot choose a past date'),
  comment: Yup.string()
    .min(10, 'Comment too short')
    .max(300, 'Comment too long'),
});

const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{ name: '', email: '', date: null, comment: '' }}
        validationSchema={BookingSchema}
        onSubmit={(values, actions) => {
          setLoading(true);

          setTimeout(() => {
            const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
            const isDuplicate = bookings.some(
              (b) => b.email.toLowerCase() === values.email.toLowerCase()
            );

            if (isDuplicate) {
              toast.error('This email has already been used for booking.');
              setLoading(false);
              return;
            }

            localStorage.setItem(
              'bookings',
              JSON.stringify([...bookings, values])
            );
            toast.success('Booking submitted successfully!');
            actions.resetForm();
            setLoading(false);
          }, 1000);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            <Field name="name" className={styles.input} placeholder="Name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />

            <Field
              name="email"
              type="email"
              className={styles.input}
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue('date', date)}
              placeholderText="Select a date"
              dateFormat="dd.MM.yyyy"
              minDate={new Date()}
              className={styles.input}
            />
            <ErrorMessage
              name="date"
              component="div"
              className={styles.error}
            />

            <Field
              name="comment"
              as="textarea"
              rows="4"
              className={styles.textarea}
              placeholder="Comment"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={styles.error}
            />

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
