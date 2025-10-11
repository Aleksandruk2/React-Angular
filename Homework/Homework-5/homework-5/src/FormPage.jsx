const FormPage = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-lg-6 offset-md-6 bg-white p-4 rounded shadow">
                        <h3 className="text-center mb-4">Форма входу</h3>

                        <form>
                            <div className="mb-3">
                                <label for="email" className="form-label">Електронна пошта</label>
                                <input type="email" id="email" className="form-control" placeholder="Введіть email"/>
                            </div>

                            <div className="mb-3">
                                <label for="password" className="form-label">Пароль</label>
                                <input type="password" id="password" className="form-control" placeholder="Введіть пароль"/>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Увійти</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormPage;