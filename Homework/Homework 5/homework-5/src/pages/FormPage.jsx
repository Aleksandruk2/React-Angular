import * as Yup from 'yup';
import {useFormik} from "formik";
import NickNameInput from "../common/NickNameInput";
import EmailInput from "../common/EmailInput";
import PasswordInput from "../common/PasswordInput";

const validationSchema = Yup.object().shape({
    nickName: Yup.string().max(50, "Введене ім'я, містить забагато символів.").required("Будь ласка, вкажть ім'я."),
    email: Yup.string().email("Будь ласка, вкажіть пошту вірно.").required("Будь ласка, вкажіть пошту."),
    password: Yup.string()
        .required("Будь ласка, вкажіть піроль.")
        .min(8, "Пароль має містити мінімум 8 символів.")
        .matches(/[A-Z]/, "Пароль має містити мінімум одну велику літеру.")
        .matches(/[0-9]/, "Пароль має містити мінімум одну цифру.")
        .matches(/[!@#$%^&*]/, "Пароль має містити мінімум один символ"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Пароль не співпадає.").required("Будь ласка, підтвердіть пароль.")
});

const FormPage = () => {

    const initValues = {
        nickName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const handleFormikSubmit = async (values) => {
        console.log("Formik values:", values);
    }

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: validationSchema,
        onSubmit: handleFormikSubmit
    });

    const {values, handleSubmit, errors, touched, handleChange} = formik;


    return (
        <>
            <form onSubmit={handleSubmit} noValidate className={"col-8 offset-2 col-md-6 offset-md-3"}>
                <NickNameInput
                    label={"Вкажіть ім'я"}
                    field={"nickName"}
                    error={errors.nickName}
                    touched={touched.nickName}
                    value={values.nickName}
                    onChange={handleChange}
                />

                <EmailInput
                    label={"Вкажіть пошту"}
                    field={"email"}
                    error={errors.email}
                    touched={touched.email}
                    value={values.email}
                    onChange={handleChange}
                />

                <PasswordInput
                    label={"Вкажіть пароль"}
                    field={"password"}
                    error={errors.password}
                    touched={touched.password}
                    value={values.password}
                    onChange={handleChange}
                />

                <PasswordInput
                    label={"Вкажіть повторно пароль"}
                    field={"confirmPassword"}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    value={values.confirmPassword}
                    onChange={handleChange}
                />

                <button type='submit' className={'btn btn-primary'}>Вхід</button>
            </form>
        </>
    );
}

export default FormPage;