import useCalculatorStore from "../calculator/calculatorStore";

function Results() {
  const { result, totalRepayment } = useCalculatorStore();

  return (
    <section className="bg-slate-900 p-8 lg:rounded-bl-[5rem] lg:p-10">
      <h2 className="mb-4 text-2xl text-white lg:text-[1.563rem] lg:leading-8">
        Your results
      </h2>
      <p className="mb-6 text-[15px] text-slate-300 lg:mb-10 lg:text-base">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <div className="rounded-lg border-t-4 border-t-lime bg-[#0e2632] p-4 lg:px-8 lg:py-6">
        <div className="border-b border-b-slate-300/25 pb-4 pt-1 lg:pb-10">
          <p className="mb-3.5 text-slate-300">Your monthly repayments</p>
          <span className="text-[2.5rem] font-bold leading-[2.5rem] text-lime lg:text-[3.5rem] lg:leading-none">
            £{result}
          </span>
        </div>

        <div className="pb-1.5 pt-4 lg:pt-8">
          <p className="mb-2 text-slate-300">
            Total you'll repay over the term
          </p>
          <span className="text-2xl text-white">£{totalRepayment}</span>
        </div>
      </div>
    </section>
  );
}

export default Results;
