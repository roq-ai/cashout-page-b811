import * as yup from 'yup';

export const cashoutValidationSchema = yup.object().shape({
  cashout_date: yup.date().required(),
  amount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
