const Task1Page = () => {

    return (


        <>
            <div className={'bg-image mx-auto p-2 font'}>
                <div className={'p-5'}>
                    <div className={'row'}>
                        <div className={'col'}>
                            <p className={'m-0 fw-bold'}>Book title:</p>
                            <p className={'border-bottom border-dark ms-2'}>The Shadow of the Wind</p>
                            <p className={'m-0 fw-bold'}>Author's full name:</p>
                            <p className={'border-bottom border-dark ms-2'}>Carlos Ruiz Zafón</p>
                            <p className={'m-0 fw-bold'}>Genre:</p>
                            <p className={'border-bottom border-dark ms-2'}>Mystery, Historical Fiction</p>
                            <p className={'m-0 fw-bold'}>Number of pages:</p>
                            <p className={'ms-2'}>487</p>

                        </div>
                        <div className={'col'}>
                            <h2 className={'fw-bold'}>Reviews:</h2>
                            <p className={'border-bottom border-dark'}>1. “A beautifully written novel full of intrigue and passion. Every page is mesmerizing.”</p>
                            <p className={'border-bottom border-dark'}>2. “A masterpiece that captures the soul of literature itself.”</p>
                            <p>3. “Zafón’s storytelling is both haunting and unforgettable.”</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Task1Page;