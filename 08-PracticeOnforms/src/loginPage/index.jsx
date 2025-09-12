import { useState } from "react";

const initialValues = {
    name : '',
    email : ''
}

function LoginPage(){
    const [formData, setFormData] = useState(initialValues);

    function handleChange(event){
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name] : value,
        });
    }
    
    function handleOnSubmit(event){
        event.preventDefault();
        console.log("form data details : ", formData);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} >
            <label>Name : </label>
            <input value={formData.name} type="text" placeholder="Enter your Name" name="name" id="name" onChange={handleChange}/>

             <label>Email : </label>
            <input value={formData.email} type="email" placeholder="Enter your Email" name="email" id="email" onChange={handleChange} />
            <br />
            <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage;