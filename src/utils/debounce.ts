const debounce = (fn: Function, timeDelay = 1000) => {
  let fnTimer: number | undefined;
  return (...args: any[]) => {
    clearTimeout(fnTimer);
    fnTimer = setTimeout(() => fn(...args), timeDelay);
  };
};

export default debounce;
