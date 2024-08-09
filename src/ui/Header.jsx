import useCalculatorStore from "../features/calculator/calculatorStore";
import Button from "./Button";

function Header() {
  const { clearAll } = useCalculatorStore();

  return (
    <header className="mb-6 flex flex-col items-start justify-between gap-1.5 lg:mb-10 lg:flex-row lg:items-center">
      <h1 className="text-2xl font-bold">Mortgage Calculator</h1>

      <Button type="clearAll" onClick={clearAll}>
        Clear All
      </Button>
    </header>
  );
}

export default Header;
