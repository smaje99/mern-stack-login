import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import roles from '../helpers/roles';

const schema = yup.object().shape({
    name: yup
        .string("La nombre debe tener un texto")
        .required("Debes ingresar un nombre"),
    email: yup
        .string("El correo electrónico debe ser un texto")
        .email("El correo electrónico no es válido")
        .required("Debe ingresar un correo electrónico"),
    role: yup
        .string("El rol debe ser un texto")
        // .required("Debe ingresar un rol válido")
        .oneOf(Object.values(roles), "El rol no es válido, elija otro")
});

export default yupResolver(schema);
