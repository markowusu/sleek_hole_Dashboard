import i18n from "../../../public/translation/i18n.json";
import * as yup from 'yup';

const emailValidationSchema = yup.object({
    email: yup
    .string(`${i18n.email}`)
    .email(`${i18n.enterAValidEmail}`)
    .required(`${i18n.emailIsRequired}`)
});

export {
    emailValidationSchema,
} 