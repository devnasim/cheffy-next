import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/router';

import { loginAction } from '../src/store/authSlice';
import LoginForm from '../src/components/LoginForm';

function LoginPage() {
  const dispatch = useDispatch();

  const { status, error } = useSelector((state) => state.auth);
  const onSubmit = async (values) => {
    await dispatch(
      // loginAction({ login: 'test_user2@gmail.com'.trim(), password: '123456' }),
      loginAction({ login: values.email.trim(), password: values.password }),
    );
  };

  return <LoginForm loading={status === 'loading'} error={error} onSubmit={onSubmit} />;
}

export default LoginPage;
