export default function Addons({setActiveStep, isYearly, addons, setAddons}){

  function handleChange(e){
    const {name, checked} = e.target
    setAddons(prev => ({
      ...prev, 
      [name]: checked
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    setActiveStep(4)
  }

  function handleBackNav(){
    setActiveStep(2)
  }

  return (
    <>
      <div className="form-container">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <form
          id="add-ons"
          onSubmit={handleSubmit}
          className="form"
        >
          <label 
            htmlFor="online"
            className="addon-label"
          >
            <input
              id="online"
              name="online"
              type="checkbox"
              onChange={handleChange}
              checked={addons.online}
            />
            <div>
              <h2>Online service</h2>
              <p>Access to multiplayes games</p>
            </div>
            <span>
              {
                !isYearly ? '$1/mo' : '$10/yr'
              }
            </span>
          </label>

          <label 
            htmlFor="storage"
            className="addon-label"
          >
            <input
              id="storage"
              name="storage"
              type="checkbox"
              onChange={handleChange}
              checked={addons.storage}
            />
            <div>
              <h2>Larger storage</h2>
              <p>Extra 1TB of cloud save</p>
            </div>
            <span>
              {
                !isYearly ? '$2/mo' : '$20/yr'
              }
            </span>
          </label>

          <label 
            htmlFor="customize"
            className="addon-label"
          >
            <input
              id="customize"
              name="customize"
              type="checkbox"
              onChange={handleChange}
              checked={addons.customize}
            />
            <div>
              <h2>Customizable Profile</h2>
              <p>Custom theme on your profile</p>
            </div>
            <span>
              {
                !isYearly ? '$2/mo' : '$20/yr'
              }
            </span>
          </label>
        </form>
      </div>
      <div className="footer">
        <button onClick={handleBackNav} className='back'>Go Back</button>
        <button className="btn" form="add-ons">
          Next Step
        </button>
      </div>
    </>
  )
}