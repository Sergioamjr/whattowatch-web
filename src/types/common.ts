// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixMeLater = any;
export * from "./movies";

export type ReactChildren = {
  children: React.ReactNode;
};

export type GenresType = {
  id: number;
  name: string;
};

export interface AppStoreTypes {
  isLogged: boolean;
  setIsLogged: (arg0: boolean) => void;
}
