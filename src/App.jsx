import PersonalInfo from "./steps/PersonalInfo"
import Plan from "./steps/Plan"
import Steps from "./components/Steps"
import Addons from "./steps/Addons"
import { useState } from "react"

export default function App(){

  const [activeStep, setActiveStep] = useState(2)
  const [isYearly, setIsYearly] = useState(false)
  const [plan, setPlan] = useState('arcade')
  const [addons, setAddons] = useState({
    online: false,
    storage: false,
    customize: false
  })

  return (
    <div className="wrapper">
      <div className="container">
        <Steps activeStep={activeStep} />
        {
          activeStep === 1 ? 
          <PersonalInfo setActiveStep={setActiveStep} />
          : 
          activeStep === 2 ?
          <Plan isYearly={isYearly} setIsYearly={setIsYearly} setActiveStep={setActiveStep} plan={plan} setPlan={setPlan} />
          :
          activeStep === 3 ?
          <Addons setActiveStep={setActiveStep} isYearly={isYearly} addons={addons} setAddons={setAddons} />
          :
          'Confirmation Page'
        }
      </div>
    </div>
  )
}