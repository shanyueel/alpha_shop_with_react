import TextInput from "../TextInput/TextInput.jsx"

import styles from "./StepThreeForm.css"

export default function StepThreeForm() {
  return(
    <div className = "form-content">
      <h2 className = "form-title">付款資訊</h2>
      <form id ="step-three-form" className="step-form">
        <TextInput inputId="payment-name" title="持卡人姓名" holderText="John Doe"/>
        <TextInput inputId="payment-card-number" title="卡號"  holderText="1111 2222 3333 4444"/>
        <TextInput inputId="payment-card-expiration-date" title="有效期限"  holderText="MM / YY"/>
        <TextInput inputId="payment-card-security-code" title="CVC / CCV"  holderText="123"/>
      </form>
    </div>
  )
}