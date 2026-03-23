const PLAN = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15
  }, 
  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150
  }
}

const ADDONS = {
  monthly: {
    online: {
      title: 'Online service',
      price: 1
    },
    storage: {
      title: 'Larger storage',
      price: 2
    },
    customize: {
      title: 'Customizable Profile',
      price: 2
    }
  },
  yearly: {
    online: {
      title: 'Online service',
      price: 10
    },
    storage: {
      title: 'Larger storage',
      price: 20
    },
    customize: {
      title: 'Customizable Profile',
      price: 20
    }
  }
}

export default function Confirmation({plan, addons, setActiveStep, isYearly}){

  function handleBackNav(){
    setActiveStep(3)
  }

  function handleConfirm(){
    console.log('Confirmed')
  }

  function redirect(e){
    e.preventDefault()
    setActiveStep(2)
  }

  const selectedAddons = Object.keys(addons).filter(key => addons[key])

  const selectedPlan = plan[0].toUpperCase() + plan.slice(1)

  const billing = isYearly ? 'yearly' : 'monthly'
  const addonsTotal = selectedAddons.reduce((acc, cur) => (acc+(ADDONS[billing][cur].price)), 0)
  const totalPlanPrice = PLAN[billing][plan]+addonsTotal

  return (
    <>
      <div className="form-container">
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
            <span>
              {
                !isYearly ? `$${PLAN.monthly[plan]}/mo` : `$${PLAN.yearly[plan]}/yr`
              }
            </span>
          </div>

          {
            selectedAddons.length > 0 &&
            <div className="addons">
              {
                selectedAddons.map(addon => {

                  const {title, price} = ADDONS[billing][addon]
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
            <span>
              {
                !isYearly ? `$${totalPlanPrice}/mo` : `$${totalPlanPrice}/yr`
              }
            </span>
          </p>
        </div>
        <div className="footer">
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
      </div>
    </>
  )
}