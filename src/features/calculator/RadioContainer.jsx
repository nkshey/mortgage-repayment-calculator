import ErrorMessage from "../../ui/ErrorMessage";
import useCalculatorStore from "./calculatorStore";
import CustomRadioButton from "../../ui/CustomRadioButton";

function RadioContainer() {
  const { mortgageType, setMortgageType } = useCalculatorStore();

  return (
    <div className="mb-6 lg:mb-10">
      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-2.5 cursor-default text-slate-700">
          Mortgage Type
        </legend>

        <CustomRadioButton
          type="Repayment"
          checked={mortgageType === "Repayment"}
          onChange={() => setMortgageType("Repayment")}
        />

        <CustomRadioButton
          type="Interest Only"
          checked={mortgageType === "Interest Only"}
          onChange={() => setMortgageType("Interest Only")}
        />

        <ErrorMessage value={mortgageType} />
      </fieldset>
    </div>
  );
}

export default RadioContainer;
