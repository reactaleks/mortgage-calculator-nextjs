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
      <div className="md:mt-5">
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
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-4 md:items-center md:mt-5">
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
          inputFieldStep={0.01}
          formError={formErrors.interest}
          placeholderPosition="right"
        />
      </div>

      <>
        <fieldset className="mt-7 md:mt-5">
          <legend className="font-semibold text-almost-light-blue">
            Mortgage Type
          </legend>
          <div>
            <div
              className={`h-14 pl-5 border flex justify-start rounded-md mt-2 md:h-12      ${
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
              className={`h-14 pl-5 border flex justify-start rounded-md mt-2 md:h-12      ${
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
      <div className="pb-10 md:mt-6">
        <button
          className="flex items-center justify-center w-full m-auto mt-5 rounded-full md:ml-0 calculator-submit-button text-dark-blue bg-dark-yellow h-14 md:w-6/12 lg:w-8/12"
          type="submit"
        >
          <div className="flex">
            <div className="mr-5 lg:mr-0 div">
              <Image
                src={calculatorButtonImage}
                alt="calculator button image"
              />
            </div>
            <div className="font-extrabold"> Calculate Repayments</div>
          </div>
        </button>
      </div>
    </form>
  );
}
