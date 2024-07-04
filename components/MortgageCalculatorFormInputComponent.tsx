export default function CalculatorFormInput({formInputLabel, formInputPlaceholder, formInputType, getInputFieldValue, inputFieldMax, inputFieldStep, formError }) {

    const handleInputFieldChange = (e) => {
        getInputFieldValue(Number(e.target.value))
    }

    return (
        <div className="calculator-form-input">
            <label htmlFor={formInputLabel}>{formInputLabel}</label>
            <input onChange={handleInputFieldChange} type={formInputType} id={formInputLabel} name={formInputLabel} min={0} max={inputFieldMax} step={inputFieldStep}/>
            
            <div className="placeholder">{formInputPlaceholder}</div>

            <p>{formError}</p>
        </div>
    )
}3