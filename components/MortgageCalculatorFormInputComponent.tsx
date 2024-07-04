export default function CalculatorFormInput({
  formInputLabel,
  formInputPlaceholder,
  formInputType,
  getInputFieldValue,
  inputFieldMax,
  inputFieldStep,
  formError,
}) {
  const handleInputFieldChange = (e) => {
    getInputFieldValue(Number(e.target.value));
  };

  return (
    <div className="calculator-form-input flex flex-col mt-4">
      <label className="text-blue-900 font-semibold mt-2" htmlFor={formInputLabel}>{formInputLabel}</label>

      <div className="relative mt-2">
        <input
          className={`pl-5 h-14 pr-4 py-2 rounded-md border-2 w-full ${formError ? "border-red-500" : "border-blue-900 bg-white"}`}
          onChange={handleInputFieldChange}
          type={formInputType}
          id={formInputLabel}
          name={formInputLabel}
          min={0}
          max={inputFieldMax}
          step={inputFieldStep}
        />

        <div
          className={`placeholder w-24 inset-y-0.5 right-0.5 pr-3  
                    flex items-center justify-center rounded-r-md  
                    pointer-events-none absolute text-blue-900 border-l-2 font-semibold ${formError ? "border-red-500 bg-red-500 text-white" : "border-b-blue-900 bg-cyan-100"}`}>
          {formInputPlaceholder}
        </div>
      </div>

      <p className="text-red-500">{formError}</p>

    </div>
  );
}
3;
