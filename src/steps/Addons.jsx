import { ADDONS } from "../util"
import Footer from "../components/Footer"

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

  const billing = isYearly ? 'yearly' : 'monthly'
  const addonItems = Object.keys(ADDONS)

  return (
    <main>
      <div className="card-wrapper">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <form
          id="add-ons"
          onSubmit={handleSubmit}
          className="form addon-web-layout"
        >
          {
            addonItems.map(item => {
              const {title, desc} = ADDONS[item]
              const price = ADDONS[item][billing]
              const unit = isYearly ? 'yr' : 'mo'
              
              return (
                <label
                  key={item}
                  htmlFor={item}
                  className="addon-label"
                >
                  <input
                    id={item}
                    name={item}
                    type="checkbox"
                    onChange={handleChange}
                    checked={addons[item]}
                  />
                  <div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                  </div>
                  <span>{`$${price}/${unit}`}</span>
                </label>
              )
            })
          }

        </form>
      </div>
      <Footer>
        <button onClick={handleBackNav} className='back'>Go Back</button>
        <button className="btn" form="add-ons">
          Next Step
        </button>
      </Footer>
    </main>
  )
}