"use client";

import MortgageCalculatorColumn from "./MortgageCalculatorColumnComponent";
import CalculatorColumnTitle from "./MortgageCalculatorColumnTitleComponent";
import CalculatorColumnDescription from "./MortgageCalculatorColumnDescriptionComponent";
import CalculatorForm from "./MortgageCalculatorFormComponent";
import CalculatorOutput from "./MortgageCalculatorOutputCompoenent";

import { useState, useEffect } from "react";

interface FormErrors {
  amount: string;
  term: string;
  interest: string;
  repaymentType: string;
}

export default function MortgageCalculatorComponent() {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [mortgageTerm, setMortgageTerm] = useState(0);
  const [mortgageInterestRate, setMortgageInterestRate] = useState(0);
  const [mortgageRepaymentType, setMortgageRepaymentType] = useState(null);
  const [errors, setErrors] = useState({});
  const [didCalculate, setDidCalculate] = useState(Boolean);
  const [monthlyPayment, setMothlyPayment] = useState(0);
  const [totalMortgageFigure, setTotalMortgageFigure] = useState(0);
  const [resetForm, setResetForm] = useState(Boolean)

  useEffect(() => {
    setMortgageAmount(0);
    setMortgageTerm(0);
    setMortgageInterestRate(0);
    setMortgageRepaymentType(null);
    setMothlyPayment(0);
    setTotalMortgageFigure(0);
    setDidCalculate(false);
    setResetForm(false)
  }, []);


  const getMortgageAmount = (num: number) => {
    setMortgageAmount(num);
  };
  const getMortgageTerm = (num: number) => {
    setMortgageTerm(num);
  };
  const getMortgageRate = (num: number) => {
    setMortgageInterestRate(num);
  };
  const setRepaymentType = (e) => {
    setMortgageRepaymentType(e.currentTarget.value);
  };
  const setMonthlyPayment = (paymentAmmount) => {
    setMothlyPayment(paymentAmmount);
  };
  const setMortgageTotalAmount = (mortgageAmmount) => {
    setTotalMortgageFigure(mortgageAmmount);
  };

  // Form validation
  const validateUserInput = (e) => {
    e.preventDefault();

    let formErrors = {} as FormErrors

    if (!mortgageAmount) {
      formErrors.amount = "Mortgage amount is required";
    }

    if (!mortgageTerm) {
      formErrors.term = "Mortgage term is required";
    }

    if (!mortgageInterestRate) {
      formErrors.interest = "Interest rate is required";
    }

    if (!mortgageRepaymentType) {
      formErrors.repaymentType = "Repayment type is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setDidCalculate(true);
      calculateMortgagePayment()
    } else {
      setDidCalculate(false);
    };
  };
  // Calculate payment based on the information provided in input fields.
  const calculateMortgagePayment = () => {

      let mortgageMonthylPayment;
      let mortgageTotalRepaid;

      const monthlyInterestRate = mortgageInterestRate / 1200;
      const totalPayments = mortgageTerm * 12;

      if (mortgageRepaymentType === "interestOnly") {
        // Interest-only payment formula
        mortgageMonthylPayment = mortgageAmount * monthlyInterestRate;
        setMonthlyPayment(mortgageMonthylPayment);
      } else {
        // Regular mortgage payment formula
        mortgageMonthylPayment =
          (mortgageAmount * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
        setMonthlyPayment(mortgageMonthylPayment);
      }
      mortgageTotalRepaid = mortgageMonthylPayment * totalPayments;
      setMortgageTotalAmount(mortgageTotalRepaid);

      setDidCalculate(true);
    
  };


  // Reset form
  const resetFormInputs = () => {
    setResetForm(true)
    setMortgageAmount(0);
    setMortgageTerm(0);
    setMortgageInterestRate(0);
    setMortgageRepaymentType(null);
    setMothlyPayment(0);
    setTotalMortgageFigure(0);
    setDidCalculate(false);
    setErrors({});

    setTimeout(() => {setResetForm(false)}, 1000)
  }

  return (
    <div className="mortgage-calculator-component flex flex-col">
      <MortgageCalculatorColumn bgcolour="bg-white" textcolour="text-black" columnheight="h-auto">
        <CalculatorColumnTitle columnTitle="Mortgage Calculator" textalaignment="text-start"/>
        <CalculatorColumnDescription textalignment="text-start"><a className="underline" onClick={() => {resetFormInputs()}}>Clear all</a></CalculatorColumnDescription>

        <CalculatorForm
          getMortgageAmount={getMortgageAmount}
          getMortgageTerm={getMortgageTerm}
          getMortgageRate={getMortgageRate}
          setRepaymentType={setRepaymentType}
          validateForm={validateUserInput}
          formErrors={errors}
          clearForm={resetForm}
          repaymentSelected={mortgageRepaymentType}
        />
      </MortgageCalculatorColumn>

      <MortgageCalculatorColumn bgcolour="bg-cyan-950" textcolour="text-white" columnheight="">
        <CalculatorColumnTitle columnTitle="Your results" textalaignment="text-center"/>
        <CalculatorColumnDescription textalignment="text-center">
          <CalculatorOutput
            monthlyPayment={monthlyPayment}
            totalMortgageRepaid={totalMortgageFigure}
            didCalculate={didCalculate}
          />
        </CalculatorColumnDescription>
      </MortgageCalculatorColumn>
    </div>
  );
}
