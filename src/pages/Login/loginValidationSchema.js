import { object, string } from 'yup';

const LoginValidationSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).max(30).required(),
});

export default LoginValidationSchema;
