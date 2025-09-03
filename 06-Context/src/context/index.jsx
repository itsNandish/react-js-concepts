import { createContext, useState } from "react";

//creating Global context
export const GlobalContext = createContext(null);

//Create Global state that recieves component as a children
function GlobalState({children}){

    const [theme, setTheme] = useState('light');

    function handleThemeOnClick(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }


    return <GlobalContext.Provider value={{theme, handleThemeOnClick}}>{children}</GlobalContext.Provider>
}


export default GlobalState;