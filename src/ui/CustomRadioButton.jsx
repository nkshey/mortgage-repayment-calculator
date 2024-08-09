function CustomRadioButton({ type, checked, onChange }) {
  return (
    <div className="relative flex items-center">
      <input
        type="radio"
        name="mortgage-type"
        id={type}
        checked={checked}
        onChange={onChange}
        required
        className="peer h-12 w-full cursor-pointer appearance-none rounded-[0.25rem] border border-slate-500 transition-colors duration-150 checked:border-lime checked:bg-lime/15 hover:border-lime focus:border-lime focus:outline-none"
      />
      <span className="content=[''] pointer-events-none absolute left-0 ml-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-full border border-slate-900 transition-colors duration-150 after:absolute after:h-[0.625rem] after:w-[0.625rem] after:rounded-full after:bg-lime after:opacity-0 after:transition-opacity after:duration-150 after:content-[''] peer-checked:border-lime peer-checked:after:opacity-100"></span>
      <label
        htmlFor={type}
        className="absolute left-0 ml-[3.125rem] cursor-pointer text-lg font-bold"
      >
        {type}
      </label>
    </div>
  );
}

export default CustomRadioButton;
