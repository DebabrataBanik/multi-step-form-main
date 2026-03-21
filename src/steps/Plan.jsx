import ArcadeIcon from '../assets/images/icon-arcade.svg'
import AdvancedIcon from '../assets/images/icon-advanced.svg'
import ProIcon from '../assets/images/icon-pro.svg'
import { useState } from 'react'

export default function Plan({isYearly, setIsYearly, setActiveStep}){

  const [plan, setPlan] = useState('arcade')

  function handleChange(e){
    console.log(e.target.value)
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

  return (
    <>
      <div className="form-container">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <form
          id="plan"
          onSubmit={handleSubmit}
          className="form"
        >
          <label 
            className='plan-label'
            htmlFor="arcade"
          >
            <input
              id='arcade'
              type="radio"
              name='plan'
              value='arcade'
              onChange={handleChange}
              checked={plan === 'arcade'}
            />
            <div className='radio-item'>
              <img src={ArcadeIcon} alt="icon-arcade" />
              <div>
                <h2>Arcade</h2>
                <p>$9/mo</p>
              </div>
            </div>
          </label>

          <label 
            className='plan-label'
            htmlFor="advanced"
          >
            <input
              id='advanced'
              type="radio"
              name='plan' 
              value='advanced'
              onChange={handleChange}
              checked={plan === 'advanced'}
            />
            <div className='radio-item'>
              <img src={AdvancedIcon} alt="icon-advanced" />
              <div>
                <h2>Advanced</h2>
                <p>$12/mo</p>
              </div>
            </div>
          </label>

          <label 
            className='plan-label'
            htmlFor="pro"
          >
            <input 
              id="pro" 
              type="radio" 
              name="plan"
              value='pro'
              onChange={handleChange}
              checked={plan === 'pro'}
            />
            <div className='radio-item'>
              <img src={ProIcon} alt="icon-pro" />
              <div>
                <h2>Pro</h2>
                <p>$15/mo</p>
              </div>
            </div>
          </label>
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
    </>
  )
}