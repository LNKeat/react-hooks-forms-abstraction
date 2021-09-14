import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    admin: false,
  })

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;
    if(event.target.type === 'checkbox'){
      value = event.target.checked
    }
    setFormData({
      ...formData, [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="firstName" 
        type="text" 
        onChange={handleChange} 
        value={formData.firstName}
        placeholder="First name"
       />
      <input 
        name="lastName" 
        type="text" 
        onChange={handleChange} 
        value={formData.lastName}
        placeholder="Last name"
       />
       <br />
       <input 
        name="phoneNumber" 
        type="text" 
        onChange={handleChange} 
        value={formData.phoneNumber}
        placeholder="Phone number"
       />
       <br />
       <label>Admin:
        <input 
          name="admin" 
          type="checkbox" 
          onChange={handleChange} 
          value={formData.admin}
        />
       </label>
       <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
