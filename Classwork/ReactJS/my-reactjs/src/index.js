import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//Компоненти не писати і не використовувати
//class App extends React.Component {}

const root = ReactDOM.createRoot(document.getElementById('root'));
//Відмальовує DOM дерево
// <></> - це спеціальний тег на React, для обєднання групи коду html, щоб не писати div
root.render(
    <>
        <App />
    </>
);