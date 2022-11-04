import { createContext } from "react";
import { IList } from "../interfaces";
interface ContextProps {
  list: IList[];
  locked: string[];
  active: IList;
  isLoaded: boolean;
  word: string;

  // method
  listAdd: (data: IList) => void;
  listEdit: (data: IList) => void;
  listDelete: (data: IList) => void;
  listActive: (data: IList, word: string) => void;
  listLocked: (data: IList) => void;
  Random: () => void;
}

export const ListContext = createContext({} as ContextProps);
