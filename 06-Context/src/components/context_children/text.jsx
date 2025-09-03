import { useContext } from "react";
import { GlobalContext } from "../../context";


function ContextTextComponent(){

    // const getSateFromGlobalContext = useContext(GlobalContext);
    //destruture
    const {theme} = useContext(GlobalContext);

   // console.log(getSateFromGlobalContext);
    return (
       <h2 style={{fontSize : theme === 'light' ? '25px' : '30px', 
        backgroundColor : theme === 'light' ? 'Green' : 'White',
        color : theme === 'light' ? 'beige' : 'red'
       }}>Name : Nandish</h2>
    )
}

export default ContextTextComponent;