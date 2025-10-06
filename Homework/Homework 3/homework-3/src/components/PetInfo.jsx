const PetInfo = ({
                     name,
                     breed,
                     age,
                     gender,
                     kind,
                     photoPath
                 }) => {
    return (
        <>
            <div className={'container pt-4 d-flex bg-warning fw-bold'}>
                <div className={'col-7 p-1'}>
                    <p>Ім'я: {name}</p>
                    <p>Порода: {breed}</p>
                    <p>Вік: {age}</p>
                    <p>Стать: {gender}</p>
                    <p>Вид: {kind}</p>
                </div>
                <div className={'col-5 p-1'}>
                    <img className={'rounded-2 border'} src={photoPath} alt="photo" width={"100%"}/>
                </div>

            </div>
        </>
    );
}

export default PetInfo;