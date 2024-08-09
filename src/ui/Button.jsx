function Button({ children, type, onClick, isSubmit }) {
  const styles = {
    primary:
      "flex w-full items-center transition-colors duration-150 justify-center gap-3 rounded-full bg-lime py-3.5 text-lg font-bold text-slate-900 focus:outline-lime focus:outline-offset-4 hover:bg-lime/50 lg:w-[calc(100%-6.8rem)]",
    clearAll:
      "text-slate-700 underline transition-colors duration-150 underline-offset-2 hover:text-slate-900 focus:outline-lime focus:outline-offset-2",
  };

  if (isSubmit)
    return (
      <button type="submit" className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
