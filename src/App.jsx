import Form from "./features/calculator/Form";
import useCalculatorStore from "./features/calculator/calculatorStore";
import Results from "./features/results/Results";
import ResultsEmpty from "./features/results/ResultsEmpty";

function App() {
  const { isCalculated } = useCalculatorStore();

  return (
    <main className="overflow-hidden bg-white lg:grid lg:w-[63.125rem] lg:grid-cols-2 lg:grid-rows-1 lg:rounded-3xl">
      <Form />
      {isCalculated ? <Results /> : <ResultsEmpty />}
    </main>
  );
}

export default App;
