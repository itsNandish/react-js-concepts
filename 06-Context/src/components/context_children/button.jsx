import { useContext } from "react";
import { GlobalContext } from "../../context";


function ContextButtonComponent(){

    const {handleThemeOnClick} = useContext(GlobalContext);

    return (
        <button onClick={handleThemeOnClick}>Change Theme</button>
    )
}

export default ContextButtonComponent;