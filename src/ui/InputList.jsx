import useCalculatorStore from "../features/calculator/calculatorStore";
import Input from "./Input";

function InputList() {
  const {
    mortgageAmount,
    setMortgageAmount,
    mortgageTerm,
    setMortgageTerm,
    interestRate,
    setInterestRate,
  } = useCalculatorStore();

  return (
    <>
      <Input
        htmlFor="mortgage-amount"
        name="Mortgage Amount"
        inputIcon="£"
        value={mortgageAmount}
        onChange={(value) => setMortgageAmount(value)}
      />

      <div className="flex gap-6">
        <Input
          htmlFor="mortgage-term"
          name="Mortgage Term"
          inputIcon="years"
          value={mortgageTerm}
          onChange={(e) => setMortgageTerm(e.target.value)}
        />
        <Input
          htmlFor="interest-rate"
          name="Interest Rate"
          inputIcon="%"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
    </>
  );
}

export default InputList;
