import { create } from "zustand";
import { formatNumber } from "../../utils/helpers";

const useCalculatorStore = create((set) => ({
  mortgageAmount: "",
  mortgageTerm: "",
  interestRate: "",
  mortgageType: "",
  result: 0,
  totalRepayment: 0,
  isCalculated: false,
  isSubmitted: false,

  setMortgageAmount: (amount) => set({ mortgageAmount: amount }),
  setMortgageTerm: (term) => set({ mortgageTerm: term }),
  setInterestRate: (rate) => set({ interestRate: rate }),
  setMortgageType: (type) => set({ mortgageType: type }),

  calculateResult: () =>
    set((state) => {
      if (
        !state.mortgageAmount ||
        !state.mortgageTerm ||
        !state.interestRate ||
        !state.mortgageType ||
        state.interestRate > 100
      ) {
        return { ...state, isSubmitted: true };
      }

      if (state.mortgageType === "Repayment") {
        const monthlyInterestRate = state.interestRate / 100 / 12;
        const monthlyTerm = state.mortgageTerm * 12;
        const result =
          (state.mortgageAmount *
            (monthlyInterestRate * (1 + monthlyInterestRate) ** monthlyTerm)) /
          ((1 + monthlyInterestRate) ** monthlyTerm - 1);

        if (isNaN(result)) {
          alert("Enter valid data!");
          return {};
        }

        const resultFormatted = formatNumber(result.toFixed(2));
        const totalRepaymentFormatted = formatNumber((result * 300).toFixed(2));
        return {
          result: resultFormatted,
          totalRepayment: totalRepaymentFormatted,
          isCalculated: true,
        };
      } else {
        const monthlyInterestRate = state.interestRate / 100 / 12;
        const result = state.mortgageAmount * monthlyInterestRate;

        if (isNaN(result)) {
          alert("Enter valid data!");
          return {};
        }

        const resultFormatted = formatNumber(result.toFixed(2));
        const totalRepaymentFormatted = formatNumber((result * 300).toFixed(2));
        return {
          result: resultFormatted,
          totalRepayment: totalRepaymentFormatted,
          isCalculated: true,
        };
      }
    }),

  clearAll: () =>
    set({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "",
      result: 0,
      totalRepayment: 0,
      isCalculated: false,
      isSubmitted: false,
    }),
}));

export default useCalculatorStore;
