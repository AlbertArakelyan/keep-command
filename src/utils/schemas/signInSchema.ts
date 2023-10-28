import * as yup from 'yup';

import {
  requiredMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
} from 'constants/validation';

const signInSchema = yup.object({
  email: yup.string().email().max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
  password: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
});

export type SignInFormDataType = yup.InferType<typeof signInSchema>;

export default signInSchema;
