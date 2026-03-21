import PersonalInfo from "./steps/PersonalInfo"
import Plan from "./steps/Plan"
import Steps from "./components/Steps"
import { useState } from "react"

export default function App(){

  const [activeStep, setActiveStep] = useState(2)
  const [billingPlan, setBillingPlan] = useState('monthly')

  return (
    <div className="wrapper">
      <div className="container">
        <Steps activeStep={activeStep} />
        {
          activeStep === 1 ? 
          <PersonalInfo setActiveStep={setActiveStep} />
          : 
          activeStep === 2 ?
          <Plan billingPlan={billingPlan} setBillingPlan={setBillingPlan} setActiveStep={setActiveStep} />
          :
          'Third Page goes here'
        }
      </div>
    </div>
  )
}