import { useRef } from "react";


function FocusInput(){


    const inputRef = useRef(null);

    function handleOnclick(){
        inputRef.current.focus();
        console.log(inputRef);
    }
    return (
        <div>
            <input type="text" name="name" ref={inputRef}/>
           <button onClick={handleOnclick}>Focus</button>
        </div>
    )
}

export default FocusInput;