import PersonalInfo from "./steps/PersonalInfo"
import Plan from "./steps/Plan"
import Steps from "./components/Steps"
import Addons from "./steps/Addons"
import Confirmation from "./steps/Confirmation"
import Success from "./steps/Success"
import { useState } from "react"

export default function App(){

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  })
  const [activeStep, setActiveStep] = useState(1)
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
          <PersonalInfo formData={formData} setFormData={setFormData} setActiveStep={setActiveStep} />
          : 
          activeStep === 2 ?
          <Plan isYearly={isYearly} setIsYearly={setIsYearly} setActiveStep={setActiveStep} plan={plan} setPlan={setPlan} />
          :
          activeStep === 3 ?
          <Addons setActiveStep={setActiveStep} isYearly={isYearly} addons={addons} setAddons={setAddons} /> 
          :
          activeStep === 4 ?
          <Confirmation plan={plan} addons={addons} setActiveStep={setActiveStep} isYearly={isYearly} />
          : 
          <Success />
        }
      </div>
    </div>
  )
}