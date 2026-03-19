import PersonalInfo from "./components/PersonalInfo"
import Steps from "./components/Steps"
import { useState } from "react"

export default function App(){

  const [activeStep, setActiveStep] = useState('1')

  return (
    <div className="wrapper">
      <div className="container">
        <Steps activeStep={activeStep} />
        {
          activeStep === '1' ? 
          <PersonalInfo setActiveStep={setActiveStep} />
          : 'next Page'
        }
      </div>
    </div>
  )
}