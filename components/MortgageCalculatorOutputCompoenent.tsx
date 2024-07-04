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
      <div className="flex flex-col justify-center align-middle items-center p-5">
        <div className="">
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
        </div>

        <div className="h-48">
          <CalculatorOutputField val={monthlyPayment} />
          <CalculatorOutputField val={totalMortgageRepaid} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center p-5 h-auto">
        <Image
          src={emptyCalculatorImage}
          alt="Calculator is empty and will show results when provided with values"
        />
        <h3>Results shown here</h3>
        <p>
          Complete the form and click &quot;calculate repayments&quot; to see
          what your monthly repayments would be.
        </p>
      </div>
    );
  }
}
