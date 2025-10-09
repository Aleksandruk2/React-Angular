const MyInfo = ({
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
            <div className={'container border rounded text-white  pt-4 d-flex bg-info fw-bold'}>
                <div className={'col-7 p-1 border-end'}>
                    <p className={'border-bottom border-white'}>ПІБ: {fullName}</p>
                    <p className={'border-bottom border-white'}>Телефон: {phone}</p>
                    <p className={'border-bottom border-white'}>Електрона почта: {email}</p>
                    <p className={'border-bottom border-white'}>Місто проживання: {city}</p>
                    <p className={'border-bottom border-white'}>Досід роботи: {workExperience}</p>
                    <p className={'border-bottom border-white'}>Навички: {skill}</p>
                </div>
                <div className={'col-5 p-1'}>
                    <img className={'rounded-2 border'} src={photoPath} alt="photo" width={"100%"}/>
                </div>

            </div>
        </>
    );
}

export default MyInfo;