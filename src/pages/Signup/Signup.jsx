import React from 'react';
import { Button, message } from 'antd';
import { Link, navigate, Redirect } from '@reach/router';
import { observer } from 'mobx-react';
import useRootStore from '../../hooks/useRootStore';
import RenderForm from '../../components/RenderForm/RenderForm';
import SignupValidationSchema from './signupValidationSchema';
import { StyledCard, Wrapper, HaveAccount } from './StyledSignup';

const formInputs = [
  {
    id: new Date(),
    label: 'Your email',
    name: 'email',
    placeholder: 'example@email.com',
  },
  {
    id: new Date(),
    label: 'Your name',
    name: 'name',
    placeholder: 'Enter your name',
  },
  {
    id: new Date(),
    label: 'Your password',
    name: 'password',
    placeholder: 'Enter your password',
  },
  {
    id: new Date(),
    label: 'Password confirmation',
    name: 'passwordConfirmation',
    placeholder: 'Enter your password again',
  },
];

const initialValues = {
  email: '',
  name: '',
  password: '',
};

const Signup = observer(() => {
  const { authStore, uiState } = useRootStore();

  const handleSubmit = async (values) => {
    try {
      await authStore.signUp(values);
      await navigate('/dashboard/login');
    } catch (error) {
      message.error('Oops, something went wrong, try again later.');
    }
  };

  if (uiState.authenticated) {
    return <Redirect to="/dashboard/army" noThrow />;
  }

  return (
    <Wrapper>
      <StyledCard title="Sign Up">
        <RenderForm
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          inputs={formInputs}
          ValidationSchema={SignupValidationSchema}
          submitButtonLabel="Sign Up"
        />

        <HaveAccount>
          <p>Already have an account?</p>
          <Link to="/login">
            <Button type="link">Sign In!</Button>
          </Link>
        </HaveAccount>
      </StyledCard>
    </Wrapper>
  );
});

export default Signup;
