import { PLAN } from '../util'

export default function Plan({isYearly, setIsYearly, setActiveStep, plan, setPlan}){

  function handleChange(e){
    setPlan(e.target.value)
  }

  function handleToggle(){
    setIsYearly(prev => !prev)
  }

  function handleSubmit(e){
    e.preventDefault()
    setActiveStep(3)
  }

  function handleBackNav(){
    setActiveStep(1)
  }

  const billing = isYearly ? 'yearly' : 'monthly'
  const planItems = Object.keys(PLAN)

  return (
    <div>
      <div className="card-wrapper">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <form
          id="plan"
          onSubmit={handleSubmit}
          className="form plan-web-layout"
        >
          {
            planItems.map(item => {

              const {title, icon} = PLAN[item]
              const price = PLAN[item][billing]
              const unit = isYearly ? 'yr' : 'mo'

              return (
                <label
                  key={item}
                  className='plan-label'
                  htmlFor={item}
                >
                  <input
                    id={item}
                    type="radio"
                    name='plan'
                    value={item}
                    onChange={handleChange}
                    checked={plan === item}
                  />
                  <div className='radio-item'>
                    <img src={icon} alt={`icon-${item}`} />
                    <div>
                      <h2>{title}</h2>
                      {
                        !isYearly ?
                        <p>{`$${price}/${unit}`}</p>
                        :
                        <>
                          <p>{`$${price}/${unit}`}</p>
                          <p className='highlight'>2 months free</p>
                        </>
                      }
                    </div>
                  </div>
                </label>
              )
            })
          }

          <div className='switch-container'>
            <span className={!isYearly ? 'checked' : ''}>
              Monthly
            </span>
            <label className='switch-label' htmlFor="switch">
              <input
                id='switch' 
                className='switch'
                type="checkbox"
                checked={isYearly}
                onChange={handleToggle}
                aria-label={`Billing period: ${isYearly ? 'Yearly' : 'Monthly'}`}
              />
            </label>
            <span className={isYearly ? 'checked' : ''}>
              Yearly
            </span>
          </div>
        </form>
      </div>
      <div className="footer">
        <button onClick={handleBackNav} className='back'>Go Back</button>
        <button className="btn" form="plan">
          Next Step
        </button>
      </div>
    </div>
  )
}