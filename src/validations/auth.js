import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please enter a valid email address')
    .trim()
    .lowercase(),
  password: yup
    .string()
    .required('Please enter you password')
    .min(5, 'Password must be atleast 3 characters')
    .max(15, 'Password must be less than 15 characters')
});
