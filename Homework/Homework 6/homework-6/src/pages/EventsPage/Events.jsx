import Event from '../../common/Event/Event'

const Events = () => {

    return (
        <>
            <div className={'bg-warning text-white pt-2 border-bottom border-dark border-2'}>
                <h2 className={'text-center'}>Актуальні події</h2>
            </div>
            <div className={'d-flex flex-wrap mt-2 p-2'}>
                <Event id={0}
                       title={"Музичний фестиваль 'SoundWave 2025'"}
                       date={"2025-07-20"}
                       artists={[
                           "The Hard Beats, ",
                           "DJ Luna, ",
                           "Monatik, ",
                           "Kazka, ",
                           "Jerry Heil"
                       ]}
                       info={"Щорічний літній фестиваль електронної та поп-музики, що збирає найкращих виконавців з усієї України. На гостей чекають яскраві виступи, світлове шоу та зона відпочинку біля річки."}
                       location={"Київ, Парк Муромець"}
                       imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN9F-RdSxVipJllx59v4xxdh-LHU_IocA5w&s"}
                />
                <Event id={1}
                       title={"Rock Night Festival"}
                       imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrmlJJPR90tJw0QPTWo4ESK_CT_S2PqeTYQ&s"}
                       date={"2025-08-14"}
                       artists={["The Rolling Beats, ", "Electric Pulse, ", "Luna Drive"]}
                       info={"Великий літній фестиваль року з найкращими рок-гуртами Європи. Енергія, світло, драйв і море емоцій!"}
                       location={"Київ, SkyArena"}
                />
                <Event id={2}
                       title={"Jazz & Wine Evening"}
                       date={"2025-09-02"}
                       artists={["Smooth Jazz Quartet, ",
                           "Ella Simone"]}
                       info={"Затишний вечір джазу під келих вина. Відчуй атмосферу спокою та ніжної музики."}
                       location={"Львів, Opera Hall"}
                       imgPath={"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1126959223%2F2285255065353%2F1%2Foriginal.20250917-140958?crop=focalpoint&fit=crop&w=600&auto=format%2Ccompress&q=75&sharp=10&fp-x=4.88636363636e-05&fp-y=5.3531598513e-05&s=b24464b7114d2ffe3a66b8d126dc225d"}
                />

            </div>
        </>
    );
}
export default Events;



