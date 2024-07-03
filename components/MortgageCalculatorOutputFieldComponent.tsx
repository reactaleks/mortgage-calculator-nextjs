export default function CalculatorOutputField({ val }) {
  return (
    <div className="mortgage-calculator-output-field">
      £{val.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </div>
  );
}
