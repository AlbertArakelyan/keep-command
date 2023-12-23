import * as yup from 'yup';

import { requiredMessage, validationLength, maxLengthMessage } from 'constants/validation';

const folderSchema = yup.object({
  name: yup.string().max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
  description: yup.string().max(validationLength.long, maxLengthMessage.long).required().nullable(),
});

export default folderSchema;
