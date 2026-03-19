export default function Steps({activeStep}){
  return (
    <div className="steps-container">
      <ul>
        <li className={`step ${+activeStep >= 1 ? 'active' : ''}`}>1</li>
        <li className={`step ${+activeStep >= 2 ? 'active' : ''}`}>2</li>
        <li className={`step ${+activeStep >= 3 ? 'active' : ''}`}>3</li>
        <li className={`step ${+activeStep >= 4 ? 'active' : ''}`}>4</li>
      </ul>
    </div>
  )
}