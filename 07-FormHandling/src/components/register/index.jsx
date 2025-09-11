import { useState } from "react";
import { registerFormElements } from "../../config";
import CommonForm from "../common-form";

const initialRegisterData = {
    name : '',
    email : '',
    password : ''
}

 function Register(){
    const [registerFormData, setRegisterFormData] =
     useState(initialRegisterData);

     
    function onHandleSubmit(){
        event.preventDefault;
        console.log(loginFormData, 'loginFormData');
    }

    return (
        <div>
            <h1>Registration Form</h1>
            <CommonForm
            formData={registerFormData} 
            setFormData={setRegisterFormData} 
            formControls={registerFormElements} 
            buttonText = {'Register'}
            onHandleSubmit = {onHandleSubmit}
            />
        </div>
    )
}

export default Register;