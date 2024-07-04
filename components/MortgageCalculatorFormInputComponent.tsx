export default function CalculatorFormInput({
  formInputLabel,
  formInputPlaceholder,
  formInputType,
  getInputFieldValue,
  inputFieldMax,
  inputFieldStep,
  formError,
  placeholderPosition
}) {
  const handleInputFieldChange = (e) => {
    getInputFieldValue(Number(e.target.value));
  };

  return (
    <div className="flex flex-col mt-4 calculator-form-input md:mt-1">
      <label className="mt-2 font-semibold text-almost-light-blue md:mt-0" htmlFor={formInputLabel}>{formInputLabel}</label>

      <div className="relative mt-2 md:mt-1">
        <input
          className={`
            ${placeholderPosition === "right" ? "pl-5 pr-5" : "pl-16 pr-5" }
            focus:outline-none focus:border-dark-blue  h-14 md:h-10  text-dark-blue font-bold py-2 rounded-md border-2 w-full ${formError ? "border-error-red" : "border-almost-light-blue bg-white"}
            `}
          onChange={handleInputFieldChange}
          type={formInputType}
          id={formInputLabel}
          name={formInputLabel}
          min={0}
          max={inputFieldMax}
          step={inputFieldStep}
        />

        <div
          className={`
                    ${placeholderPosition === "right" ? "right-0.5 rounded-r-sm md:right-0.5" : "left-0.5 rounded-l-sm md:left-0.5"}
                    placeholder w-auto p-5 inset-y-0.5   
                    flex items-center justify-center  
                    md:h-4 md:rounded-sm md:p-4 md:border-y-2 md:border-light-blue
                    pointer-events-none absolute  text-almost-light-blue font-semibold 
                    ${formError ? "bg-error-red text-white" : "border-b-almost-light-blue bg-light-blue"}
                    
                    `}>
          {formInputPlaceholder}
        </div>
      </div>

      <p className="mt-2 text-sm font-semibold text-error-red md:mt-1" >{formError}</p>

    </div>
  );
}
3;
