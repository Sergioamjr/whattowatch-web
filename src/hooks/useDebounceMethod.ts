import { useState, useEffect, useRef } from "react";

type Query = {
  isQuerying: boolean;
  results: any[];
  search: string;
  hasFinished: boolean;
  hasError: boolean;
};

type returnedType = [Query, (e: React.ChangeEvent<HTMLInputElement>) => void];
type params = (s: string) => void;

const delayToFetch = 1000;

export const useFetchWPAPI = (fn: params): returnedType => {
  const fetchRef = useRef<number>(null);
  const [query, setQuery] = useState<Query>({
    isQuerying: false,
    results: [],
    search: "",
    hasFinished: false,
    hasError: false,
  });

  const updateState = (obj = {}) => {
    setQuery((v) => ({
      ...v,
      ...obj,
    }));
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery((prev) => ({
      ...prev,
      search: value,
    }));
  };

  useEffect(() => {
    clearTimeout(fetchRef.current);
    if (query.search) {
      fetchRef.current = window.setTimeout(fetchAPI, delayToFetch);
    }
  }, [query.search]);

  const fetchAPI = async () => {
    try {
      updateState({ isQuerying: true });
      const results = await fn(query.search);
      updateState({ isQuerying: false, results, hasFinished: true });
    } catch (err) {
      updateState({ isQuerying: false, hasFinished: true, hasError: err });
    }
  };

  return [query, onInputChange];
};
