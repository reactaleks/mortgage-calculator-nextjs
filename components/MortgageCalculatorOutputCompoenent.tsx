import CalculatorOutputField from "./MortgageCalculatorOutputFieldComponent";
import emptyCalculatorImage from "../public/illustration-empty.svg";
import Image from "next/image";

export default function CalculatorOutput({
  monthlyPayment,
  totalMortgageRepaid,
  didCalculate,
}) {
  if (didCalculate) {
    return (
      <>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayments&quot; again.
        <CalculatorOutputField val={monthlyPayment} />
        <CalculatorOutputField val={totalMortgageRepaid} />
      </>
    );
  } else {
    return (
    <>
        <Image src={emptyCalculatorImage} alt="Calculator is empty and will show results when provided with values"/>
        <h3>Results shown here</h3>
        <p>Complete the form and click &quot;calculate repayments&quot; to see what your monthly repayments would be.</p>
    </>);
  }
}
