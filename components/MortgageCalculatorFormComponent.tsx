import CalculatorFormInput from "./MortgageCalculatorFormInputComponent";
import Image from "next/image";
import calculatorButtonImage from "../public/icon-calculator.svg";

export default function CalculatorForm(
  {getMortgageAmount,
  getMortgageTerm,
  getMortgageRate,
  setRepaymentType,
  calculateMortgagePayment
}
) {
  return (
    <form>
      <CalculatorFormInput
        formInputLabel="Mortgage Amount"
        formInputPlaceholder="£"
        formInputType="number"
        getInputFieldValue={getMortgageAmount}
        inputFieldMax={9999999999}
        inputFieldStep={1}
      />
      <CalculatorFormInput
        formInputLabel="Mortgage Term"
        formInputPlaceholder="years"
        formInputType="number"
        getInputFieldValue={getMortgageTerm}
        inputFieldMax={25}
        inputFieldStep={1}
      />
      <CalculatorFormInput
        formInputLabel="Interest Rate"
        formInputPlaceholder="%"
        formInputType="number"
        getInputFieldValue={getMortgageRate}
        inputFieldMax={99}
        inputFieldStep={0.1}
      />

      <fieldset>
        <legend>Mortgage Type</legend>
        <>
          <input
            type="radio"
            id="repayment"
            name="mortgageType"
            value="repayment"
            onChange={setRepaymentType}
            defaultChecked
          />
          <label htmlFor="repayment">Repayment</label>
        </>
        <>
          <input
            type="radio"
            id="interestOnly"
            name="mortgageType"
            value="interestOnly"
            onChange={setRepaymentType}
          />
          <label htmlFor="interestOnly">Interest Only</label>
        </>
      </fieldset>

      <button className="calculator-submit-button" type="submit" onClick={(calculateMortgagePayment)}>
   
        <Image src={calculatorButtonImage} alt="calculator button image" />
        Calculate Repayments
      </button>
    </form>
  );
}
 