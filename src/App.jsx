import PersonalInfo from "./steps/PersonalInfo"
import Plan from "./steps/Plan"
import Steps from "./components/Steps"
import { useState } from "react"

export default function App(){

  const [activeStep, setActiveStep] = useState(2)
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="wrapper">
      <div className="container">
        <Steps activeStep={activeStep} />
        {
          activeStep === 1 ? 
          <PersonalInfo setActiveStep={setActiveStep} />
          : 
          activeStep === 2 ?
          <Plan isYearly={isYearly} setIsYearly={setIsYearly} setActiveStep={setActiveStep} />
          :
          'Third Page goes here'
        }
      </div>
    </div>
  )
}