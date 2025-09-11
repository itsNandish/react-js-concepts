import { useState } from "react";

function Forms() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState('');
  const [formData, setFormData] = useState({
    name : '',
    email : ''
  });

  //Chnage the input element as we start typing..
  function handleInputChange(event) {
    const { value } = event.target;
    setNameValue(value);
  }

  //For Mail :Chnage or get the input element as we start typing.
  function handleEmailChange(event){
    const { value } = event.target;
    setEmailValue(value);
  }

//Handling fordata for multiple inputs
  function handleOnChange(event){
    const {name, value} = event.target;
    
    setFormData({
        ...formData,
        [name] : value,
    });

  }

  function handleSubmit(event){
    event.preventDefault();

    //call api and pass the name value

  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your Name"
          onChange={handleOnChange}
        />
        <br />
        <input 
          value={formData.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleOnChange}
        />
        <br />
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
