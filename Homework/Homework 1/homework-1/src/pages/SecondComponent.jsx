import Medals from "./Medals";
import Cups from "./Cups";
const SecondComponent = () => {
    const gols = 14;

    return (
        <>
            <div className={"container"}>
                <h6 className={"mt-3"}>Забиті голи {gols} ⚽</h6>

                <h3>Медалі</h3>
                <div className={"d-flex justify-content-center flex-wrap border-top border-dark mb-2"}>
                    <Medals/>
                    <Medals/>
                    <Medals/>
                    <Medals/>
                    <Medals/>
                </div>
                <h3>Кубки</h3>
                <div className={"d-flex justify-content-center flex-wrap border-top border-dark mb-2"}>
                    <Cups/>
                    <Cups/>
                    <Cups/>
                    <Cups/>
                </div>
            </div>
        </>
    );
}

export default SecondComponent;