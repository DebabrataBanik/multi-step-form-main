import Thankyou from '../assets/images/icon-thank-you.svg'

export default function Success(){
  return (
    <div className="form-container">
      <div className='success-content'>
        <img className='check' src={Thankyou} alt="icon-thank-you" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fund using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </div>
  )
}