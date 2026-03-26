const steps = [
  {
    id: 1, label: 'YOUR INFO'
  },
  {
    id: 2, label: 'SELECT PLAN'
  },
  {
    id: 3, label: 'ADD-ONS'
  },
  {
    id: 4, label: 'SUMMARY'
  }
]


export default function Steps({activeStep}){
  return (
    <div className="steps-container">
      <ol aria-label="Form steps">
        
        {
          steps.map(step => {
            const isCurrentStep = activeStep === step.id
            const isComplete = step.id === 4 && activeStep > 4
            const isActive = isCurrentStep || isComplete

            return (
              <li 
                key={step.id}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className={`step ${isActive ? 'active' : ''}`}>
                  {step.id}
                </span>
                <div className="step-info">
                  <span>STEP {step.id}</span>
                  <p>{step.label}</p>
                </div>
              </li>
            )
          })
        }
        
      </ol>
    </div>
  )
}