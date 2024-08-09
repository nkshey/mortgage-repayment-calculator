import useCalculatorStore from "../features/calculator/calculatorStore";

function ErrorMessage({ value, htmlFor }) {
  const { isSubmitted } = useCalculatorStore();

  if (htmlFor === "interest-rate" && value > 100)
    return (
      <span className="mb-3 block text-sm text-red">
        The number should be less or equal to 100
      </span>
    );

  return (
    <span
      className={`mb-3 text-sm text-red ${isSubmitted && !value ? "block" : "hidden"}`}
    >
      This field is required
    </span>
  );
}

export default ErrorMessage;
