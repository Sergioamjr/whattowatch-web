export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = (name) => {
  localStorage.getItem(name);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
