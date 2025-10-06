const PersonalPage = ({
    fullName,
    phone,
    email,
    city,
    workExperience,
    skill,
    photoPath
    }) => {

    return (
        <>
            <div className={'container pt-4 d-flex bg-info fw-bold'}>
                <div className={'col-7 p-1'}>
                    <p>ПІБ: {fullName}</p>
                    <p>Телефон: {phone}</p>
                    <p>Електрона почта: {email}</p>
                    <p>Місто проживання: {city}</p>
                    <p>Досід роботи: {workExperience}</p>
                    <p>Навички: {skill}</p>
                </div>
                <div className={'col-5 p-1'}>
                    <img className={'rounded-2 border'} src={photoPath} alt="photo" width={"100%"}/>
                </div>

            </div>
        </>
    );
}

export default PersonalPage;