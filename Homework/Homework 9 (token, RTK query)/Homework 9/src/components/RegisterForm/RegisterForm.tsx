import * as Yup from 'yup';
import {useFormik} from "formik";
import FormInput from "../commons/FormInput";
import FormFileInput from "../commons/FormFileInput";
import {LucideMail, UserRoundPen, Image, Phone, LucideLock} from "lucide-react";
import {usePostAccountRegisterMutation} from "../../services/apiAccountRegister";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Будь ласка, вкажіть пошту вірно.").required("Будь ласка, вкажіть пошту."),
    firstName: Yup.string().max(50, "Введене ім'я, містить забагато символів.").required("Будь ласка, вкажіть ім'я."),
    secondName: Yup.string().max(50, "Введене прізвище, містить забагато символів.").required("Будь ласка, вкажіть прізвище."),
    photo: Yup.string().required("Будь ласка, виберіть фото."),
    phone: Yup.string()
        .max(10, "Номер телефону має містити в собі 10 цифр.")
        .min(10, "Номер телефону має містити в собі 10 цифр.")
        .required("Будь ласка, вкажіть номер телефона."),
    password: Yup.string()
        .required("Будь ласка, вкажіть піроль.")
        .min(8, "Пароль має містити мінімум 8 символів.")
        .matches(/[A-Z]/, "Пароль має містити мінімум одну велику літеру.")
        .matches(/[0-9]/, "Пароль має містити мінімум одну цифру.")
        .matches(/[!@#$%^&*]/, "Пароль має містити мінімум один символ."),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Пароль не співпадає.").required("Будь ласка, підтвердіть пароль."),
});

const RegisterForm = () => {

    const [postAccountRegister, {isLoading}] = usePostAccountRegisterMutation();

    const initValue = {
        email: "",
        firstName: "",
        secondName: "",
        photo: null as File | null,
        phone: "",
        password: "",
        confirmPassword: "",
    }

    const handleFormikSubmit = async () => {
        try {
            const file = values.photo;
            let base64 = "";
            if (file) {
                const reader = new FileReader();
                reader.onload = async () => {
                    base64 = reader.result as string;
                    // console.log("Formik data to send:",values,"File:",base64);
                    const result = await postAccountRegister({
                        email: values.email,
                        firstName: values.firstName,
                        secondName: values.secondName,
                        photo: base64,
                        phone: values.phone,
                        password: values.password,
                        confirmPassword: values.confirmPassword,
                    });
                    if(result.data) {
                        console.log("Реєстрація успішна:", result);
                        localStorage.setItem("token",result.data.token);
                    }
                };
                reader.readAsDataURL(file);
            }
        } catch (err) {
            console.error("Помилка:",err);
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0] || null;
        formik.setFieldValue("photo", file);
    };

    const formik = useFormik({
        initialValues: initValue,
        validationSchema: validationSchema,
        onSubmit: handleFormikSubmit,
    });

    const {values, handleSubmit, errors, touched, handleChange} = formik;


    return (
        <>
            <div className={`${isLoading && "blurOn blurShow"}  blur text-white text-center`}> TEST </div>
            <div className={`mt-3`}>
                <form onSubmit={handleSubmit} noValidate className={'container col-8 border p-2 shadow'}>
                    <FormInput label={"Вкажіть email"}
                               field={"email"}
                               type={"email"}
                               error={errors.email}
                               touched={touched.email}
                               value={values.email}
                               onChange={handleChange}
                               icon={LucideMail}
                    ></FormInput>

                    <FormInput label={"Вкажіть ім'я"}
                               field={"firstName"}
                               type={"text"}
                               error={errors.firstName}
                               touched={touched.firstName}
                               value={values.firstName}
                               onChange={handleChange}
                               icon={UserRoundPen}
                    ></FormInput>

                    <FormInput label={"Вкажіть прізвище"}
                               field={"secondName"}
                               type={"text"}
                               error={errors.secondName}
                               touched={touched.secondName}
                               value={values.secondName}
                               onChange={handleChange}
                               icon={UserRoundPen}
                    ></FormInput>

                    <FormFileInput label={"Виберіть фото"}
                                   field={"photo"}
                                   type={"file"}
                                   error={errors.photo}
                                   touched={touched.photo}
                                   onChange={handleFileChange}
                                   icon={Image}
                    ></FormFileInput>

                    <FormInput label={"Введіть номер телефону"}
                               field={"phone"}
                               type={"text"}
                               error={errors.phone}
                               touched={touched.phone}
                               value={values.phone}
                               onChange={handleChange}
                               icon={Phone}
                    ></FormInput>

                    <FormInput label={"Введіть пароль"}
                               field={"password"}
                               type={"password"}
                               error={errors.password}
                               touched={touched.password}
                               value={values.password}
                               onChange={handleChange}
                               icon={LucideLock}
                    ></FormInput>

                    <FormInput label={"Введіть повторно пароль"}
                               field={"confirmPassword"}
                               type={"password"}
                               error={errors.confirmPassword}
                               touched={touched.confirmPassword}
                               value={values.confirmPassword}
                               onChange={handleChange}
                               icon={LucideLock}
                    ></FormInput>


                    <button type={"submit"} className={'btn w-100 mt-3 btn-primary border border-white mt-1'}>Реєстрація</button>
                </form>
            </div>
        </>
    );
}

export default RegisterForm;