export default function Form(){
  return (
    <div className="form-container">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form className="form">
        <label 
          htmlFor="name"
        >
          Name
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King" 
          />
        </label>
        <label 
          htmlFor="email"
        >
          Email Address
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com" 
          />
        </label>
        <label 
          htmlFor="phone number"
        >
          Phone Number
          <input
            id="phone number"
            type="number"
            placeholder="e.g. +1 234 567 890" 
          />
        </label>
      </form>
    </div>
  )
}