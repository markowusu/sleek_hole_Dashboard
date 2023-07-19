import i18n from './i18n';
const emailValidation = yup.object(){
    email: yup
    .string(`${i18n.email}`)
    .email(`${i18n.enterAValidEmail}`)
    .required(`${i18n.emailIsRequired}`);
    
}