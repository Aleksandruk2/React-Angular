import {createContext, type FC, type ReactNode, useContext, useEffect, useState} from "react";

//Це Enum як на C#
type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme; //Яка тема встановлена
    toggleTheme: () => void; //перемикач Theme
}

//Створеюєсть контекст з початковим значенням undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Це компонент який обгортає дочірні елементи, та дає ним можливість доступа до контексту ThemeContextType (theme? toggleTheme)
export const ThemeProvider : FC<{children: ReactNode}> = ({children}) => {
    //Поточна тема
    const [theme, setTheme] = useState<Theme>('light');
    //Фіксує вставлення теми
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // console.log("Перевірка теми і її встановлення")
        //Перевіряє чи є збережена тема в localStorage, якщо немає нічого повертає null
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        let initialTheme: Theme;

        if(savedTheme)
            initialTheme = savedTheme;
        else
        {

            // Перевіряє, чи в системі користувача встановлена темна тема ("prefers-color-scheme: dark").
            // Повертає булеве значення: true — якщо темна тема, false — якщо світла.
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            initialTheme = prefersDark ? "dark" : "light";
        }
        //Встаноовелня теми піся перевірки на її наявність в localStorage
        setTheme(initialTheme);
        //Встановлює true, що показує, що theme проініціалізовано
        setIsInitialized(true);
    },[]);

    //Визивається при зміні theme або isInitialized
    useEffect(() => {
        //Якщо тема ініціалізована то
        if(isInitialized) {
            //Встановлює нове значення theme в localStorage
            localStorage.setItem('theme', theme);
            //Якщо тема - темна, то
            if(theme === "dark") {
                //Додає клас tailwindcss - dark, до кореневого елемента - <html>
                document.documentElement.classList.add("dark");
            } else {
                //Видаляє клас tailwindcss - dark
                document.documentElement.classList.remove("dark");
            }
        }
    }, [theme, isInitialized]);

    //Перемикає тему на темну, якщо встановлена світла і навпаки
    const toggleTheme = () => {
        setTheme((prev)=>(prev == 'light' ? 'dark': 'light'))
    }


    //Передає значення (theme і toggleTheme) у контекст,
    //щоб будь-який компонент у середині дерева міг їх використовувати
    return (
        <ThemeContext.Provider
            value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//Повертає силку на Context - глобальний
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
}

