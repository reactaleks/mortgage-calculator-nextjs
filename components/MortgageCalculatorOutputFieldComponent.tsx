export default function CalculatorOutputField({ val, textSize, textColor }) {
  return (
    <div className={`mortgage-calculator-output-field ${textSize} ${textColor}`}>
      £{val.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </div>
  );
}
