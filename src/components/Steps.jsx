export default function Steps({activeStep}){
  return (
    <div className="steps-container">
      <ul aria-label="Form steps">
        <li>
          <span className={`step ${+activeStep === 1 ? 'active' : ''}`}>1</span>
          <div className="step-info">
            <span>STEP 1</span>
            <p>YOUR INFO</p>
          </div>
        </li>
        <li>
          <span className={`step ${+activeStep === 2 ? 'active' : ''}`}>2</span>
          <div className="step-info">
            <span>STEP 2</span>
            <p>SELECT PLAN</p>
          </div>
        </li>
        <li>
          <span className={`step ${+activeStep === 3 ? 'active' : ''}`}>3</span>
          <div className="step-info">
            <span>STEP 3</span>
            <p>ADD-ONS</p>
          </div>
        </li>
        <li>
          <span className={`step ${+activeStep >= 4 ? 'active' : ''}`}>4</span>
          <div className="step-info">
            <span>STEP 4</span>
            <p>SUMMARY</p>
          </div>
        </li>
      </ul>
    </div>
  )
}