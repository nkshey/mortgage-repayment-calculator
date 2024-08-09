function ResultsEmpty() {
  return (
    <section className="flex flex-col items-center justify-center bg-slate-900 p-8 text-center lg:rounded-bl-[5rem]">
      <img
        src="./images/illustration-empty.svg"
        alt="illustration of a calculator"
        className="text-white"
      />
      <h2 className="my-4 text-2xl font-bold text-white">Results shown here</h2>
      <p className="text-slate-300">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </section>
  );
}

export default ResultsEmpty;
