import logo from './logo.svg';
import './App.css';
import FirstComponent from "./pages/FirstComponent";
import SecondComponent from "./pages/SecondComponent";

function App() {
  return (
    <>
        <div className={"m-4 mt-3 border-1 border border-dark"}>
            <FirstComponent/>
            <SecondComponent/>
        </div>

    </>
  );
}

export default App;
