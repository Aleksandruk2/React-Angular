const Task2Page = () => {
  return (
      <>
        <div className={"container p-3"}>
            <div className={'shadow bg-dark text-white p-2'}>
                <div className={'d-flex'}>
                    <h2 className={'text-secondary'}>Група: </h2>
                    <h2>Океан Ельзи</h2>
                </div>
                <div>
                    <ul>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Святослав Вакарчук -</h6>
                            <h6 className={'ms-1'}>вокал, клавішні</h6>
                        </li>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Денис Глінін -</h6>
                            <h6 className={'ms-1'}>ударні</h6>
                        </li>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Денис Дудко -</h6>
                            <h6 className={'ms-1'}>бас-гітара</h6>
                        </li>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Мілош Єлоч -</h6>
                            <h6 className={'ms-1'}>клавішні</h6>
                        </li>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Владислав Опришко -</h6>
                            <h6 className={'ms-1'}>гітара</h6>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Альбоми</h5>
                    <ul>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Там, де нас нема (1998)</h6>

                        </li>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Янанебібув (2000)</h6>
                        </li>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Модель (2001)</h6>
                        </li>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Глорія (2005)</h6>
                        </li>
                        <li className={'d-flex'}>
                            <h6 className={'fw-bold'}>Земля (2013)</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </>
  );
}

export default Task2Page;