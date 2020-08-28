import { object, string, ref } from 'yup';

const SignupValidationSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).max(30).required(),
  passwordConfirmation: string()
    .oneOf([ref('password'), null], 'Passwords must match'),
  name: string().max(30).required(),
});

export default SignupValidationSchema;
