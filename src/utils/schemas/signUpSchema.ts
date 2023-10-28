import * as yup from 'yup';

import {
  requiredMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
  passwordsMessage,
} from 'constants/validation';

const signUpSchema = yup.object({
  name: yup.string().max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
  email: yup.string().email().max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
  password: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], passwordsMessage)
    .required(requiredMessage),
});

export type SignInFormDataType = yup.InferType<typeof signUpSchema>;

export default signUpSchema;
