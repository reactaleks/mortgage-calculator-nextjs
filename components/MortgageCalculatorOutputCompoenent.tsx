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
      <div className="flex flex-col justify-center align-middle items-center p-5  mb-5 rounded-md">
        <div className="text-left w-full text-3xl mb-5 mt-5">
          <h3>Your results</h3>
        </div>
        <div className="">
          <p className="text-left">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
        </div>

        <div className="w-full border-t-4 border-t-green-500 mt-5 p-5 rounded-md bg-cyan-950 ">
          <div className="text-left mb-2 border-b-2 border-b-cyan-800 pb-3">
            <div className="mb-2">Your monthly repayments</div>
            <CalculatorOutputField
              val={monthlyPayment}
              textSize="text-5xl"
              textColor="text-green-300"
            />
          </div>
          <div className="text-left mb-2">
            <div className="mb-2">Total you&apos;ll repay over the term</div>
            <CalculatorOutputField
              val={totalMortgageRepaid}
              textSize="text-4xl"
              textColor="text-white"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center h-auto mt-5">
        <Image
          src={emptyCalculatorImage}
          alt="Calculator is empty and will show results when provided with values"
        />
        <div className="w-full text-3xl mb-5 mt-5">
          <h3>Results shown here</h3>
        </div>
        <div className="mb-5">
          <p>
            Complete the form and click &quot;calculate repayments&quot; to see
            what your monthly repayments would be.
          </p>
        </div>
      </div>
    );
  }
}
