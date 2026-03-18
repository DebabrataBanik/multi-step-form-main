import Form from "./components/Form"
import Steps from "./components/Steps"
import Footer from "./components/Footer"

export default function App(){
  return (
    <div className="wrapper">
      <div className="container">
        <Steps />
        <Form />
        <Footer>
          <button className="btn">Next Step</button>
        </Footer>
      </div>
    </div>
  )
}