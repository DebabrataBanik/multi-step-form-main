import { useState } from "react"

export default function PersonalInfo({setActiveStep}){

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  })
  const [error, setError] = useState({
    username: false,
    email: false,
    phone: false 
  })

  function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
  }

  function handleSubmit(e){
    e.preventDefault()
    const {username, email, phone} = formData
    const validationError = {}
    if(!validateEmail(email.trim())){
      validationError.email = 'Enter valid email'
    }
    if(!username.trim()){
      validationError.username = 'This field is required'
    }
    if(!phone.trim()){
      validationError.phone = 'This field is required'
    }
    setError(validationError)

    if(Object.keys(validationError).length === 0){
      setActiveStep(2)
    }
  }

  function handleChange(e){
    const {name, value} = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
    setError(prev => ({
      ...prev,
      [name]: false
    }))
  }

  return (
    <>
      <div className="form-container">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form 
          id="personal-info"
          onSubmit={handleSubmit} 
          className="form"
        >
          <label 
            htmlFor="name"
            className="info-label"
          >
            Name
            {
              error.username && <span className="error-msg">{error.username}</span>
            }
            <input
              name="username"
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
              className={error.username ? 'error' : ''}
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label 
            htmlFor="email"
            className="info-label"
          >
            Email Address
            {
              error.email && <span className="error-msg">{error.email}</span>
            }
            <input
              name="email"
              id="email"
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              className={error.email ? 'error' : ''}
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label 
            htmlFor="phone"
            className="info-label"
          >
            Phone Number
            {
              error.phone && <span className="error-msg">{error.phone}</span>
            }
            <input
              name="phone"
              id="phone"
              type="number"
              placeholder="e.g. +1 234 567 890"
              className={error.phone ? 'error' : ''}
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
      <div className="footer">
        <button form="personal-info" className="btn">Next Step</button>
      </div>
    </>
  )
}