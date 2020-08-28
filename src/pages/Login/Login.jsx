import React from 'react';
import { Button, message } from 'antd';
import { observer } from 'mobx-react';
import { Link, navigate, Redirect } from '@reach/router';
import LoginValidationSchema from './loginValidationSchema';
import useRootStore from '../../hooks/useRootStore';
import { DontHaveAccount, LoginCard, Wrapper } from './StyledLogin';
import RenderForm from '../../components/RenderForm/RenderForm';

const formInputs = [
  {
    id: new Date(),
    label: 'Your email',
    name: 'email',
    placeholder: 'example@email.com',
  },
  {
    id: new Date(),
    label: 'Your password',
    name: 'password',
    placeholder: 'Enter your password',
  },
];

const initialValues = {
  email: '',
  password: '',
};

const Login = observer(() => {
  const { authStore, uiState } = useRootStore();

  const handleSubmit = async (values) => {
    try {
      await authStore.signIn(values);
      await navigate('/dashboard/army');
    } catch (error) {
      message.error('Invalid email or password');
    }
  };

  if (uiState.authenticated) {
    return <Redirect to="/dashboard/army" noThrow />;
  }

  return (
    <Wrapper>
      <LoginCard title="Login">
        <RenderForm
          ValidationSchema={LoginValidationSchema}
          inputs={formInputs}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          submitButtonLabel="Sign In"
        />

        <DontHaveAccount>
          <p>Do not have account yet?</p>
          <Link to="/signup">
            <Button type="link">Sign Up!</Button>
          </Link>
        </DontHaveAccount>
      </LoginCard>
    </Wrapper>
  );
});

export default Login;
