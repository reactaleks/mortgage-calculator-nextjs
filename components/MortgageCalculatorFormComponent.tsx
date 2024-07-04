import CalculatorFormInput from "./MortgageCalculatorFormInputComponent";
import Image from "next/image";
import calculatorButtonImage from "../public/icon-calculator.svg";
import { useRef } from "react";

export default function CalculatorForm({
  getMortgageAmount,
  getMortgageTerm,
  getMortgageRate,
  setRepaymentType,
  validateForm,
  formErrors,
  clearForm,
  repaymentSelected,
  
}) {
  const formRef = useRef(null);

  if (clearForm) {
    formRef.current.reset();
  } 

  return (
    <form
      onSubmit={validateForm}
      id="mortgage-calculator-form"
      ref={formRef}
      name="mortgageCalculatorForm"
      className="pr-5 pl-5"
    >
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
        <fieldset className="mt-7">
          <legend className="text-blue-900 font-semibold">Mortgage Type</legend>
          <div>
            <div
              className={`pl-5 border flex justify-start rounded-sm mt-2       ${
                repaymentSelected === "repayment"
                  ? "border-yellow-300 bg-yellow-50"
                  : " border-blue-900 bg-white"
              } 
`}
            >
              <input
                type="radio"
                id="repayment"
                name="mortgageType"
                value="repayment"
                onClick={setRepaymentType}
                
              />
              <label className="p-5 font-bold" htmlFor="repayment">
                Repayment
              </label>
            </div>
            <div
              className={`x pl-5 border flex justify-start rounded-sm mt-2       ${
                repaymentSelected === "interestOnly"
                  ? "border-yellow-300 bg-yellow-50"
                  : " border-blue-900 bg-white"
              }   
`}
            >
              <input
                type="radio"
                id="interestOnly"
                name="mortgageType"
                value="interestOnly"
                onClick={setRepaymentType}
              />
              <label className="p-5 font-bold" htmlFor="interestOnly">
                Interest Only
              </label>
            </div>
          </div>

          <p className="text-red-500">{formErrors.repaymentType}</p>
        </fieldset>
      </>

      <button
        className="mt-5 mb-7 calculator-submit-button flex justify-center items-center rounded-2xl bg-yellow-200 m-auto h-12 w-full"
        type="submit"
      >
        <div className="flex">
          <Image src={calculatorButtonImage} alt="calculator button image" />
          Calculate Repayments
        </div>
      </button>
    </form>
  );
}
