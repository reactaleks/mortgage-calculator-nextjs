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
      className="pl-5 pr-5"
    >
      <CalculatorFormInput
        formInputLabel="Mortgage Amount"
        formInputPlaceholder="£"
        formInputType="number"
        getInputFieldValue={getMortgageAmount}
        inputFieldMax={9999999999}
        inputFieldStep={1}
        formError={formErrors.amount}
        placeholderPosition="left"
      />
      <div className="md:columns-2">
        <CalculatorFormInput
          formInputLabel="Mortgage Term"
          formInputPlaceholder="years"
          formInputType="number"
          getInputFieldValue={getMortgageTerm}
          inputFieldMax={25}
          inputFieldStep={1}
          formError={formErrors.term}
          placeholderPosition="right"
        />

        <CalculatorFormInput
          formInputLabel="Interest Rate"
          formInputPlaceholder="%"
          formInputType="number"
          getInputFieldValue={getMortgageRate}
          inputFieldMax={99}
          inputFieldStep={0.1}
          formError={formErrors.interest}
          placeholderPosition="right"
        />
      </div>

      <>
        <fieldset className="mt-7">
          <legend className="font-semibold text-blue-900">Mortgage Type</legend>
          <div>
            <div
              className={`h-14 pl-5 border flex justify-start rounded-md mt-2       ${
                repaymentSelected === "repayment"
                  ? "border-dark-yellow bg-light-yellow"
                  : "border-almost-light-blue bg-white"
              }
`}
            >
              <input
                type="radio"
                id="repayment"
                name="mortgageType"
                value="repayment"
                onClick={setRepaymentType}
                className={`${
                  repaymentSelected === "repayment"
                    ? "accent-dark-yellow "
                    : "accent-white"
                }`}
              />
              <div className="content-center pl-5">
                <label className="font-bold" htmlFor="repayment">
                  Repayment
                </label>
              </div>
            </div>
            <div
              className={`h-14 pl-5 border flex justify-start rounded-md mt-2     ${
                repaymentSelected === "interestOnly"
                  ? "border-dark-yellow bg-light-yellow"
                  : "border-almost-light-blue bg-white"
              }   
`}
            >
              <input
                type="radio"
                id="interestOnly"
                name="mortgageType"
                value="interestOnly"
                onClick={setRepaymentType}
                className={`               
                  ${
                    repaymentSelected === "interestOnly"
                      ? "accent-dark-yellow "
                      : "accent-white"
                  } outline-8`}
              />
              <div className="content-center pl-5">
                <label className="font-bold" htmlFor="interestOnly">
                  Interest Only
                </label>
              </div>
            </div>
          </div>

          <p className="mt-2 text-sm font-semibold text-error-red">
            {formErrors.repaymentType}
          </p>
        </fieldset>
      </>

      <button
        className="flex items-center justify-center w-full m-auto mt-5 rounded-full mb-7 calculator-submit-button text-dark-blue bg-dark-yellow h-14"
        type="submit"
      >
        <div className="flex">
          <div className="mr-5 div">
            <Image src={calculatorButtonImage} alt="calculator button image" />
          </div>
          <div className="font-extrabold div"> Calculate Repayments</div>
        </div>
      </button>
    </form>
  );
}
