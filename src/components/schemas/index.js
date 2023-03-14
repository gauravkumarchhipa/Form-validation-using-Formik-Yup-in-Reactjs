import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup
        .string()
        .min(2)
        .max(25)
        .required("Please Enter Your name"),
    email : Yup
        .string()
        .email()
        .required("Please Enter Your email"),
    password : Yup
        .string()
        .min(6)
        .required("Please Enter Password"),
    confirmpassword : Yup
        .string()
        .required()
        .oneOf([Yup.ref('password'),null],
        "Please Enter Confirm Password"),
});