'use client';

import MortgageCalculatorColumn from "./MortgageCalculatorColumnComponent";
import CalculatorColumnTitle from "./MortgageCalculatorColumnTitleComponent";
import CalculatorColumnDescription from "./MortgageCalculatorColumnDescriptionComponent";
import CalculatorForm from "./MortgageCalculatorFormComponent";
import CalculatorOutput from "./MortgageCalculatorOutputCompoenent";

import { useState, useEffect } from "react";

export default function MortgageCalculatorComponent() {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [mortgageTerm, setMortgageTerm] = useState(0);
  const [mortgageInterestRate, setMortgageInterestRate] = useState(0);
  const [isInterestOnly, setIsInterestOnly] = useState(Boolean);
  const [didCalculate, setDidCalculate] = useState(Boolean)
  const [monthlyPayment, setMothlyPayment] = useState(0);
  const [totalMortgageFigure, setTotalMortgageFigure] = useState(0);
  
  useEffect(() => {
    setMortgageAmount(0);
    setMortgageTerm(0);
    setMortgageInterestRate(0);
    setIsInterestOnly(false);
    setMothlyPayment(0);
    setTotalMortgageFigure(0);
    setDidCalculate(false);
  }, []);

  const getMortgageAmount = (num:number) => {
    setMortgageAmount(num);
  };
  const getMortgageTerm = (num:number) => {
    setMortgageTerm(num);
  };
  const getMortgageRate = (num:number) => {
    setMortgageInterestRate(num);
  };
  const setRepaymentType = () => {
    setIsInterestOnly(!isInterestOnly)
  }
  const setMonthlyPayment = (paymentAmmount) => {
    setMothlyPayment(paymentAmmount);
  }
  const setMortgageTotalAmount = (mortgageAmmount) => {
    setTotalMortgageFigure(mortgageAmmount)
  }

  // Calculate payment based on the information provided in input fields. 
  
  
  const calculateMortgagePayment = (e) => {
    e.preventDefault()

    let mortgageMonthylPayment;
    let mortgageTotalRepaid;
    const monthlyInterestRate = mortgageInterestRate / 1200;
    const totalPayments = mortgageTerm * 12;
    if (isInterestOnly) {
        // Interest-only payment formula
        mortgageMonthylPayment = mortgageAmount * monthlyInterestRate;
        setMonthlyPayment(mortgageMonthylPayment)
      } else {
        // Regular mortgage payment formula
        mortgageMonthylPayment = mortgageAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
        setMonthlyPayment(mortgageMonthylPayment)
      }    
      mortgageTotalRepaid = mortgageMonthylPayment * totalPayments;
      setMortgageTotalAmount(mortgageTotalRepaid)

      setDidCalculate(true)
  }

  return (
    <div className="mortgage-calculator-component">
      <MortgageCalculatorColumn>
        <CalculatorColumnTitle columnTitle="Mortgage Calculator" />
        <CalculatorColumnDescription>Clear all</CalculatorColumnDescription>

        <CalculatorForm
          getMortgageAmount={getMortgageAmount}
          getMortgageTerm={getMortgageTerm}
          getMortgageRate={getMortgageRate}
          setRepaymentType={setRepaymentType}
          calculateMortgagePayment={calculateMortgagePayment}
        />
      </MortgageCalculatorColumn>

      <MortgageCalculatorColumn>
        <CalculatorColumnTitle columnTitle="Your results" />
        <CalculatorColumnDescription>
          <CalculatorOutput monthlyPayment={monthlyPayment} totalMortgageRepaid={totalMortgageFigure} didCalculate={didCalculate}/>
        </CalculatorColumnDescription>
      </MortgageCalculatorColumn>
    </div>
  );
}
