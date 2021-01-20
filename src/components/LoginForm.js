import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { Button, Input } from '../lib';

const LoginForm = ({ loading, error, onSubmit }) => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Please enter valid email').required('Email is Required'),
      password: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Password is Required'),
    }),
    onSubmit,
  });

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = formik;
  return (
    <div className="py-10">
      <div className="bg-white dark:bg-gray-800 w-full max-w-sm rounded-lg shadow-md overflow-hidden mx-auto my-auto">
        <div className="py-4 px-6">
          <h2 className="text-center font-bold text-gray-700 dark:text-white text-3xl">Brand</h2>
          <h3 className="mt-1 text-center font-medium text-gray-600 dark:text-gray-200 text-xl">
            Welcome Back
          </h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login or create account
          </p>
          <p className="py-2  text-red-700">{error && error.message}</p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <div className="py-6">
              <Input
                name="email"
                placeholder="Please enter email address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="pb-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="pb-6">
              <Input
                name="password"
                type="password"
                placeholder="Please enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="pb-2 text-sm text-red-500	">{errors.password}</p>
              )}
            </div>
            <Button type="submit" name={loading ? 'Loading...' : 'Submit'} disabled={loading} />
            {error && <p>{JSON.stringify(error)}</p>}
          </form>
        </div>
        <div className="flex items-center justify-center py-4 bg-gray-100 dark:bg-gray-700 text-center">
          <span className="text-gray-600 dark:text-gray-200 text-sm">Don't have an account? </span>
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 font-bold mx-2 text-sm hover:text-blue-500"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
