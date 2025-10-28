import './App.css'
import {useGetCategoriesQuery} from "./services/apiCategory.ts";

function App() {

    const {data: categories, isLoading, isError} = useGetCategoriesQuery();

    console.log("categories list", categories);
    console.log("categories loading", isLoading);
    console.log("categories isError", isError);

    return (
        <>
            <h1>Hello React</h1>
            <button onClick={() => {
                localStorage.setItem('token', '123456789')
            }}>
                Записати токен
            </button>

            <button onClick={() => {
                localStorage.removeItem('token')
            }}>
                Видалити токен
            </button>

            {
                categories && categories.map((category) => (
                    <div key={category.id}>
                        {category.title}
                    </div>
                ))
            }
        </>
    )
}

export default App