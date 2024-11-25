// content api allows to create a global state that can be accessed by any component within your app.


import React, {useState, createContext, useContext} from 'react';

//creating the context
const ThemeContext = createContext();

//custom hook to use the theme context
const useTheme = ()=> useContext(ThemeContext);

//Theme Provider component
function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');

    const toggleTheme = ()=>{
        setTheme ((prevTheme) => (prevTheme === 'light' ? "dark" : 'light'));
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//Button component to toggle the theme

function ThemeButton(){
    const {theme, toggleTheme} = useTheme();// accessing theme context

    return(
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark": "light"} mode
        </button>
    )
}

//main App component
function App(){
    return(
        <ThemeProvider>
            <div>
                <h1>Theme Toggle Example</h1>
            </div>
        </ThemeProvider>
    )
}
export default App;