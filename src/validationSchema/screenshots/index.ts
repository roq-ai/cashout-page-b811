import * as yup from 'yup';

export const screenshotValidationSchema = yup.object().shape({
  file_path: yup.string().required(),
  offer_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
