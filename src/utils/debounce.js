let setTimoutInstance;
export const debounce = (func, delay = 300) => {
  return (...args) => {
    if (setTimoutInstance) clearTimeout(setTimoutInstance);
    setTimoutInstance = setTimeout(() => func.apply(null, args), delay);
  };
};
