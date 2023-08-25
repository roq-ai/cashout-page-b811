import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  report_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  offer_id: yup.string().nullable().required(),
});
