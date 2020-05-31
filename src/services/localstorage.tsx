import { FixMeLater } from "./../types/common";

export const setLocalStorage = (name: string, value: FixMeLater): void => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = (name: string): FixMeLater => {
  localStorage.getItem(name);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
