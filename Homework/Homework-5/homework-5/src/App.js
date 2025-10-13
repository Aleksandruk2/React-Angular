import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./common/Header";
import BiographyPage from "./pages/BiographyPage";
import MostPopularPicturePage from "./pages/MostPopularPicturePage";
import GalleryPicturePage from "./pages/GalleryPicturePage";
import FormPage from "./pages/FormPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Header/>}>
                    <Route index element={<BiographyPage/>}></Route>
                    <Route path={"mostPopularPicture"} element={<MostPopularPicturePage/>}></Route>
                    <Route path={"galleryPicture"} element={<GalleryPicturePage/>}></Route>
                    <Route path={"form"} element={<FormPage/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;