import CalculatorFormInput from "./MortgageCalculatorFormInputComponent";
import Image from "next/image";
import calculatorButtonImage from "../public/icon-calculator.svg";
import { useRef } from "react";

export default function CalculatorForm(
  {getMortgageAmount,
  getMortgageTerm,
  getMortgageRate,
  setRepaymentType,
  validateForm,
  formErrors,
  clearForm
}
) {

  const formRef = useRef(null)

  if(clearForm) {
    formRef.current.reset()
  }

  return (
    <form onSubmit={validateForm} id="mortgage-calculator-form" ref={formRef} name="mortgageCalculatorForm">
      <CalculatorFormInput
        formInputLabel="Mortgage Amount"
        formInputPlaceholder="£"
        formInputType="number"
        getInputFieldValue={getMortgageAmount}
        inputFieldMax={9999999999}
        inputFieldStep={1}
        formError={formErrors.amount}
      />

      <CalculatorFormInput
        formInputLabel="Mortgage Term"
        formInputPlaceholder="years"
        formInputType="number"
        getInputFieldValue={getMortgageTerm}
        inputFieldMax={25}
        inputFieldStep={1}
        formError={formErrors.term}
      />

      <CalculatorFormInput
        formInputLabel="Interest Rate"
        formInputPlaceholder="%"
        formInputType="number"
        getInputFieldValue={getMortgageRate}
        inputFieldMax={99}
        inputFieldStep={0.1}
        formError={formErrors.interest}
      />


      <>
      <fieldset>
        <legend>Mortgage Type</legend>
        
          <input
            type="radio"
            id="repayment"
            name="mortgageType"
            value="repayment"
            onChange={setRepaymentType}
          />
          <label htmlFor="repayment">Repayment</label>
        
          <input
            type="radio"
            id="interestOnly"
            name="mortgageType"
            value="interestOnly"
            onChange={setRepaymentType}
          />
          <label htmlFor="interestOnly">Interest Only</label>

          <p>{formErrors.repaymentType}</p> 

      </fieldset>
      </>


      <button className="calculator-submit-button" type="submit">
   
        <Image src={calculatorButtonImage} alt="calculator button image" />
        Calculate Repayments
      </button>
    </form>
  );
}
 