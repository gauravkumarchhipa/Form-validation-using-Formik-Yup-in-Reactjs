import * as Yup from "yup";

export const form1Schema = Yup.object({
    name : Yup
        .string()
        .required("Please Enter Your name")
        .min(2)
        .max(25),
        
    email : Yup
        .string()
        .required("Please Enter Your email")
        .email(),
        
    password : Yup
        .string()
        // .required("Please Enter Password")
        .min(6),
    confirmpassword : Yup
        .string()
        // .required()
        .oneOf([Yup.ref('password'),null],
        "Please Enter Confirm Password"),
    radio : Yup
        .string()
        .oneOf(["Male","Female" ],"required").required("required"),

    fav_language : Yup
        .string()
        // .oneOf(["HTML", "CSS", "JavaScript"],"required")
        .required("Select any one")
});