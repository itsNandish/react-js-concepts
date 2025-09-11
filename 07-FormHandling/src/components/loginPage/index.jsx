import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";


const InitialFormData = {
    email : '',
    password : ''
}
 function LogIn(){

    const [loginFormData, setLoginFormData] = useState(InitialFormData)

    function onHandleSubmit(){
        event.preventDefault;
        console.log(loginFormData, 'loginFormData');
    }


    return (
        <div>
            <h1>Log-In Form</h1>
            <CommonForm 
            formData={loginFormData} 
            setFormData={setLoginFormData} 
            formControls={loginFormElements} 
            buttonText = {'LogIn'}
            onHandleSubmit = {onHandleSubmit}
            />
        </div>
    )
}

export default LogIn;