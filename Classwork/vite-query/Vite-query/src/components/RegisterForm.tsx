import {usePostAccountRegisterMutation} from "../services/apiAccounRegister.ts";


const RegisterForm = () => {

    const [postAccountRegister, {isLoading}] = usePostAccountRegisterMutation();

    console.log("Acc Register loading", isLoading);

    const handleRegister = async () => {
        const sendData = {
            email: "JongD@example.com",
            firstName: "John",
            secondName: "Doe",
            photo: "data:image/jpeg;base64,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",
            phone: "098 23 24 522",
            password: "JongD@example.com",
            confirmPassword: "JongD@example.com",
        }

        try {
            const result = await postAccountRegister(sendData).unwrap();
            console.log("Реєстрація успішна:", result);
        } catch (err) {
            console.error("Помилка:", err);
        }
    };

    return (
        <>
            <button onClick={handleRegister}>register</button>
            <div className="container">
                <form>
                    <div>
                        <div>
                            <label htmlFor="email">Введіть пошту</label>
                            <input type="email" name={"email"} placeholder={"Пошта"}/>
                        </div>
                        <div>
                            <label htmlFor="firstName">Ввдіть ім'я</label>
                            <input type="text" name={"firstName"} placeholder={"Ім'я"}/>
                        </div>
                        <div>
                            <label htmlFor="secondName">Ввдіть прізвище</label>
                            <input type="text" name={"secondName"} placeholder={"Прізвище"}/>
                        </div>
                        <div>
                            <label htmlFor="photo">Виберіть фото</label>
                            <input type="file" name={"photo"} accept={"image/*"} placeholder={"Фото"}/>
                        </div>
                        <div>
                            <label htmlFor="number">Введіть номер телефону</label>
                            <input type="text" maxLength={10} name={"number"} accept={"image/*"} placeholder={"Номер"}/>
                        </div>
                        <div>
                            <label htmlFor="password">Введіть пароль</label>
                            <input type="password" minLength={8} name={"password"} accept={"image/*"}
                                   placeholder={"Пароль"}/>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Підтвердіть пароль</label>
                            <input type="password" minLength={8} name={"confirmPassword"} accept={"image/*"}
                                   placeholder={"Підтвердіть пароль"}/>
                        </div>
                    </div>
                    <button type={"submit"}>submit</button>
                </form>
            </div>
        </>
    );
}

export default RegisterForm;