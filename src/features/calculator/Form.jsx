import Header from "../../ui/Header";
import Button from "../../ui/Button";
import useCalculatorStore from "./calculatorStore";
import RadioContainer from "./RadioContainer";
import InputList from "../../ui/InputList";

function Form() {
  const { calculateResult } = useCalculatorStore();

  return (
    <section className="px-6 py-8 lg:px-10 lg:py-10">
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <Header />

        <InputList />

        <RadioContainer />

        <Button type="primary" onClick={calculateResult} isSubmit>
          <img src="./images/icon-calculator.svg" alt="calculator icon" />
          Calculate Repayments
        </Button>
      </form>
    </section>
  );
}

export default Form;
