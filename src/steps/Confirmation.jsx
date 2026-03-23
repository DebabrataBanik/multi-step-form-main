export default function Confirmation({plan, setActiveStep, isYearly}){

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

  const selectedPlan = plan[0].toUpperCase() + plan.slice(1)

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
                !isYearly ? '$9/mo' : '$90/yr'
              }
            </span>
          </div>
          <div className="addons">
            <p>
              Online service
              <span>
                {
                  !isYearly ? '$1/mo' : '$10/yr'
                }
              </span>
            </p>
            <p>
              Larger storage
              <span>
                {
                  !isYearly ? '$2/mo' : '$20/yr'
                }
              </span>
            </p>
          </div>
        </div>
        <p className="total">Total {!isYearly ? '(per month)' : '(per year)'}
          <span>
            {
              !isYearly ? '$12/mo' : '$120/yr'
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