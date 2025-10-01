const FirstComponent = () => {
    const clubName = "SOCCER";
    const city = "Lutsk";
    const clubFoundingDate = "01.09.2019";
    const clubEmblem = "https://static.vecteezy.com/system/resources/thumbnails/011/049/345/small/soccer-football-badge-logo-sport-team-identity-illustrations-isolated-on-white-background-vector.jpg";
    return (
        <>
            <div className={"container p-1"} style={{width: "210px"}}>
                <img className={"border-bottom border-secondary"} src={clubEmblem} alt="Club Emblem"/>
                <h1 className={"ms-1"}>{clubName}</h1>
                <p className={"m-0 ms-1"}>{city}</p>
                <p className={"m-0 ms-1"}>{clubFoundingDate}</p>
            </div>
        </>
    );
}

export default FirstComponent;