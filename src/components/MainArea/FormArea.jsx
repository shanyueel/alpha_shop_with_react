import Selector from "./FormArea/Selector.jsx"
import TextInput from "./FormArea/TextInput.jsx"

import styles from "../../stylesheets/css/FormArea.css"

const genderOptions =[
  {optionName: "先生",
   optionValue: "male",},
  {optionName: "小姐",
   optionValue: "female"},   
]

const regionOptions =[
  {optionName: "請選擇縣市",
   optionValue: "default",},
  {optionName: "台北",
   optionValue: "taipei"},   
]


export default function FormArea() {
  return(
    <div className = "form-area container">
      <h2 className = "term-title">寄送地址</h2>
      <form id ="form" className="step-one-form">
        <Selector className="costumer-title" title="稱謂" optionList={genderOptions} defaultOption="male" />
        <TextInput className="costumer-name" title="姓名" inputId="customer-name" holderText="請輸入姓名"/>
        <TextInput className="costumer-phone" title="電話" inputId="customer-phone" holderText="請輸入行動電話"/>
        <TextInput className="costumer-email" title="Email" inputId="customer-email" holderText="請輸入電子郵件"/>
        <Selector className="costumer-region" title="縣市" optionList={regionOptions} defaultOption="default" />
        <TextInput className="costumer-address" title="地址" inputId="customer-address" holderText="請輸入地址"/>
      </form>
    </div>
  )
}