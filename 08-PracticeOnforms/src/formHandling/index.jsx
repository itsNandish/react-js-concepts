import { useState } from "react";


function FormHandling(){
    const [name, setName] = useState('');

    function handleNameInput(event){
        setName(event.target.value);
    }

    function handleOnSubmit(event){
        event.preventDefault;
       console.log(name);
    }

    return (
        <div>
            <h2>Form handling 1</h2>
            <form onSubmit={handleOnSubmit}>
                <label >Enter your Name</label>
                <input type="text" value={name} onChange={handleNameInput} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormHandling;