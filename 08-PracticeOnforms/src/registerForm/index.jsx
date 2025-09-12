import { useState } from "react";


const initialValues = {
    name : '',
    email : '',
    password : ''
}
function RegisterationForm(){
    const [formData, setFormData] = useState(initialValues);

    //To store data
    const [submittedData, setSubmittedData] = useState(null);

    function handleOnchange(event){
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name] : value
        });
    }

    function handleOnSubmit(event){
        event.preventDefault();
       setSubmittedData(formData);

       //clear all the values
       setFormData(initialValues);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Name : </label>
                <input type="text" placeholder="Your Name" id="name" name="name" value={formData.name} onChange={handleOnchange}/>
                <label>Email : </label>
                <input type="email" placeholder="Your Email" id="email" name="email" value={formData.email} onChange={handleOnchange}/>
                <label>Password : </label>
                <input type="password" placeholder="Your Password" id="password" name="password" value={formData.password} onChange={handleOnchange}/>
                <br />
                <br />
                <input type="submit" />

                {/* displaying submitted data  */}
                {submittedData && (
                    <div>
                        <h3>Submitted Data :</h3>
                        <p>UserName : {submittedData.name}</p>
                        <p>Email : {submittedData.email}</p>
                        <p>Password : {submittedData.password}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default RegisterationForm;