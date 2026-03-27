import { PLAN, ADDONS } from "../util"
import Footer from "../components/Footer"

export default function Confirmation({plan, addons, setActiveStep, isYearly}){

  function handleBackNav(){
    setActiveStep(3)
  }

  function handleConfirm(){
    setActiveStep(5)
  }

  function redirect(e){
    e.preventDefault()
    setActiveStep(2)
  }

  const selectedAddons = Object.keys(addons).filter(key => addons[key])

  const selectedPlan = plan[0].toUpperCase() + plan.slice(1)

  const billing = isYearly ? 'yearly' : 'monthly'
  const unit = isYearly ? 'yr' : 'mo'
  const addonsTotal = selectedAddons.reduce((acc, cur) => (acc+(ADDONS[cur][billing])), 0)
  const totalPlanPrice = PLAN[plan][billing]+addonsTotal

  return (
    <main>
      <div className="card-wrapper">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="content-container">
          <div className="plan">
            <div>
              <h2>{selectedPlan} {!isYearly ? '(Monthly)' : '(Yearly)'}</h2>
              <button onClick={redirect}>
                Change
              </button>
            </div>
            <span>{`$${PLAN[plan][billing]}/${unit}`}</span>
          </div>

          {
            selectedAddons.length > 0 &&
            <div className="addons">
              {
                selectedAddons.map(addon => {

                  const title = ADDONS[addon].title
                  const price = ADDONS[addon][billing]
                  const unit = isYearly ? 'yr' : 'mo'

                  return (
                  <p key={addon}>
                    {title}
                    <span>
                      {`+$${price}/${unit}`}
                    </span>
                  </p>
                )
                })
              }
            </div>
          }

          </div>
          <p className="total">Total {!isYearly ? '(per month)' : '(per year)'}
            <span>{`+$${totalPlanPrice}/${unit}`}</span>
          </p>
        </div>
        <Footer>
          <button 
            onClick={handleBackNav} className='back'
          >
            Go Back
          </button>
          <button  
            onClick={handleConfirm}
            className="btn confirm"
          >
            Confirm
          </button>
      </Footer>
    </main>
  )
}