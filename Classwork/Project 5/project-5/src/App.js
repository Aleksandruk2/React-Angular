import * as Yup from 'yup';
import './App.css';
import {useFormik} from "formik";
import EmailInput from "./common/EmailInput";
import PasswordInput from "./common/PasswordInput";

//Схема відації Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().email("Вкажіть вірно Вашу пошту").required("Поле є обов'язкове"),
    password: Yup.string().required("Вкажіть пароль користувача")
});

const App = () => {
    //Використовується для ініціалізації State - Formik
    const initValues = {
        email: "",
        password: "",
    }
    //Щоб ловити дані з форми
    const handleFormikSubmit = async (values) => {
        console.log("Формік дає дані", values);
    }

    const myFormik = useFormik({

    });

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: validationSchema,
        onSubmit: handleFormikSubmit,
    });

    const { values,handleSubmit, errors, touched,handleChange  } = formik;
    //Це змінні які є у середині форміка
    //formik.values
    //Це форункція у середині форміка
    //formik.handleSubmit()
    return (
        <>
            <h1 className={"text-center"}>Користуюся Yup - для валідації</h1>
            <h2 className={"text-center"}>Робота з формами через Formik</h2>
            <h3 className={"text-center"}>Для роботи із класами - classnames</h3>

            <form onSubmit={handleSubmit} noValidate className={"col-md-6 offset-md-3"}>

                <EmailInput
                    label={"Вкажіть Email"}
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

                {/*<div className="mb-3">*/}
                {/*    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>*/}
                {/*    <input type="password" className="form-control" id="exampleInputPassword1"/>*/}
                {/*</div>*/}
                <button type="submit" className="btn btn-primary">Вхід</button>
            </form>
        </>
    );
}

export default App;