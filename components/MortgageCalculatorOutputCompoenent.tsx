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
      <div className="flex flex-col items-center justify-center py-10 mb-5 align-middle rounded-md">
        <div className="w-full mt-5 mb-5 ">
          <h3 className="text-3xl text-left text-white">Your results</h3>
        </div>
        <div className="">
          <p className="text-lg text-left text-almost-white-blue">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
        </div>

        <div className="w-full p-5 mt-5 border-t-4 rounded-md border-t-bright-yellow bg-darker-blue ">
          <div className="pb-3 mb-2 text-left border-b-2 border-b-dark-blue">
            <div className="mb-2 text-almost-white-blue">Your monthly repayments</div>
            <CalculatorOutputField
              val={monthlyPayment}
              textSize="text-5xl"
              textColor="text-bright-yellow"
            />
          </div>
          <div className="mb-2 text-left">
            <div className="mb-2 text-almost-white-blue">Total you&apos;ll repay over the term</div>
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
      <div className="flex flex-col items-center justify-center h-auto py-10 text-white-main">
        <Image
          src={emptyCalculatorImage}
          alt="Calculator is empty and will show results when provided with values"
        />
        <div className="w-full mt-5 mb-5 text-3xl ">
          <h3 className="">Results shown here</h3>
        </div>
        <div className="mb-5 ">
          <p className="text-lg text-almost-white-blue">
            Complete the form and click &quot;calculate repayments&quot; to see
            what your monthly repayments would be.
          </p>
        </div>
      </div>
    );
  }
}
