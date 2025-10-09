const Task3Page = () => {
    return (
        <>
            <div className={"container p-3"}>
                <div className={'shadow bg-dark text-white p-2'}>
                    <div className={'d-flex'}>
                        <h2 className={'text-secondary'}>Назва рецепту: </h2>
                        <h2>Домашні сирники</h2>
                    </div>
                    <div>
                        <h4>Складові:</h4>
                        <ul>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Сир — 300 г</h6>
                            </li>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Яйця — 2 шт</h6>
                            </li>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Цукор — 2 ст. ложки</h6>
                            </li>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Борошно — 3 ст. ложки</h6>
                            </li>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Ванільний цукор — 1 ч. ложка</h6>
                            </li>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Олія для смаження</h6>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Послідовність приготування:</h5>
                        <ul>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Змішати сир, яйця, цукор і ванільний цукор.</h6>

                            </li>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Додати борошно та сформувати сирники.</h6>
                            </li>
                            <li className={'d-flex'}>
                                <h6 className={'fw-bold'}>Обсмажити з обох боків до золотистої скоринки.</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Task3Page;
