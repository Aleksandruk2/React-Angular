import './App.css';
import {useEffect, useState} from "react";
import axiosInstance, {axiosOMDbInstance} from "./api/axiosInstance";
import {API_URL} from "./api/apiConfig";

function App() {

    //Зберігаємо список категорій
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // getCategories();
        getOMDb();
    }, []);

    const getCategories = async () => {
        try {
            const response = await axiosInstance.get("/categories/list");
            //console.log("Result request", response.data);
            setCategories(response.data);
        }
        catch (error) {
            console.error("Помилка запиту на сервер", error)
        }
    }

    const getOMDb = async () => {
        try {
            const responce = await axiosOMDbInstance.get();
            console.log("Result request", responce.data);
        }
        catch (error) {
            console.error("Помилка запиту на сервер", error)
        }


    }

    return (
        <>
            <h1>Привіт React</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Фото
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Назва
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {categories.map((category) => (
                        <tr key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4">
                                <img src={`${API_URL}/images/200_${category.image}`}
                                     alt={category.title} width={100}/>
                                <img
                                    src="https://t4.ftcdn.net/jpg/05/97/47/95/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg"
                                    alt="..." wid/>
                            </td>
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {category.title}
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default App;