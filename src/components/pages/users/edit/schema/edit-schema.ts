import * as yup from 'yup';

export const editSchema = yup.object().shape({
  name: yup.string().min(3).required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  cityId: yup.string().min(1).required('É preciso informar uma cidade'),
});
