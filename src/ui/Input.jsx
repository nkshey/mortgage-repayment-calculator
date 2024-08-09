import { useState } from "react";
import { formatNumber, removeCommas } from "../utils/helpers";
import ErrorMessage from "./ErrorMessage";
import useCalculatorStore from "../features/calculator/calculatorStore";

function Input({ htmlFor, inputIcon, name, value, onChange }) {
  const { isSubmitted } = useCalculatorStore();
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const rawValue = e.target.value;
    const numericValue = removeCommas(rawValue);
    onChange(numericValue);
  };

  const handleKeyDown = (e) => {
    console.log(e);
    const charCode = e.keyCode;
    // Allow only numeric characters (0-9) and control keys (backspace, delete, tab, period, arrow keys)
    if (
      (charCode < 48 || charCode > 57) && // Numeric keys
      (charCode < 96 || charCode > 105) && // Numpad keys
      charCode !== 8 && // Backspace
      charCode !== 46 && // Delete
      charCode !== 9 && // Tab
      charCode !== 190 && // Period
      (charCode < 37 || charCode > 40) // Arrow keys
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="mb-4 w-full">
      <label htmlFor={htmlFor} className="mb-2.5 inline-block text-slate-700">
        {name}
      </label>

      {htmlFor === "mortgage-amount" ? (
        <div className="flex flex-col">
          <div className="relative mb-2 flex">
            <span
              className={`absolute inset-y-0 my-auto ml-[1px] flex h-[calc(100%-2px)] cursor-default items-center rounded-l-[0.18rem] border-slate-500 px-4 font-bold text-slate-700 transition-colors duration-150 ${isSubmitted && !value && "!bg-red text-white"} ${
                isFocused ? "bg-lime text-slate-900" : "bg-slate-100"
              } `}
            >
              {inputIcon}
            </span>
            <input
              type="text"
              id={htmlFor}
              autoComplete="off"
              className={`h-12 w-full cursor-pointer rounded-[0.25rem] border border-slate-500 px-4 pl-[3.663rem] text-lg font-bold caret-slate-900 transition-colors duration-150 hover:border-slate-900 focus:border-lime focus:outline-none ${isSubmitted && !value && "!border-red"}`}
              value={formatNumber(value)}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              required
            />
          </div>

          <ErrorMessage value={value} />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="relative mb-2 flex">
            <input
              type="number"
              id={htmlFor}
              className={`remove-arrow h-12 w-full cursor-pointer rounded-[0.25rem] border border-slate-500 px-4 pr-[5.654rem] text-lg font-bold caret-slate-900 transition-colors duration-150 hover:border-slate-900 focus:border-lime focus:outline-none ${htmlFor === "interest-rate" && "pr-[4.046rem]"} ${isSubmitted && !value && "!border-red"} ${htmlFor === "interest-rate" && value > 100 && "!border-red"}`}
              value={value}
              onChange={onChange}
              max={htmlFor === "interest-rate" ? 100 : undefined}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onWheel={(e) => e.target.blur()}
              onKeyDown={handleKeyDown}
              required
            />
            <span
              className={`absolute inset-y-0 right-0 my-auto mr-[1px] flex h-[calc(100%-2px)] cursor-default items-center rounded-r-[0.18rem] border-slate-500 px-4 font-bold text-slate-700 transition-colors duration-150 ${
                isFocused ? "bg-lime text-slate-900" : "bg-slate-100"
              } ${isSubmitted && !value && "!bg-red text-white"} ${htmlFor === "interest-rate" && value > 100 && "!bg-red text-white"}`}
            >
              {inputIcon}
            </span>
          </div>

          <ErrorMessage value={value} htmlFor={htmlFor} />
        </div>
      )}
    </div>
  );
}

export default Input;
