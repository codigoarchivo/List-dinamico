import { FC, useReducer, ReactNode, useEffect } from "react";
import { listReducer, ListContext } from "./";
import { IList } from "../interfaces";
import { INITIAL_STATES } from "../database";
import { shuffle } from "../utils";

export interface ListState {
  list: IList[];
  locked: string[];
  active: IList;
  isLoaded: boolean;
  word: string;
}

interface Props {
  children: ReactNode;
}

const LIST_INITIAL_STATE: ListState = {
  list: [],
  locked: [],
  active: INITIAL_STATES,
  isLoaded: false,
  word: ""
};

export const ListProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, LIST_INITIAL_STATE);

  useEffect(() => {
    try {
      const dataList = JSON.parse(window.localStorage.getItem("list")!)
        ? JSON.parse(window.localStorage.getItem("list")!)
        : [];
      dispatch({ type: "[Counter] - List", payload: dataList });
    } catch (error) {
      dispatch({ type: "[Counter] - List", payload: [] });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(state.list));
  }, [state.list]);

  const listAdd = (data: IList) => {
    dispatch({ type: "[Counter] - List - Add", payload: data });
  };

  const Random = () => {
    const data = [...shuffle(state.list)];
    dispatch({ type: "[Counter] - List - Random", payload: data });
  };

  const listLocked = (dat: IList) => {
    const locked = state.list.map((item: IList) =>
      item.id === dat.id ? { ...item, locked: !item.locked } : item
    );
    dispatch({ type: "[Counter] - List - Locked", payload: locked });
  };

  const listEdit = (data: IList) => {
    dispatch({ type: "[Counter] - List - Edit", payload: data });
  };

  const listDelete = (data: IList) => {
    dispatch({ type: "[Counter] - List - Delete", payload: data });
  };

  const listActive = (data: IList, word: string) => {
    dispatch({ type: "[Counter] - List - Active", payload: data, word });
  };

  return (
    <ListContext.Provider
      value={{
        ...state,

        // method
        listAdd,
        listEdit,
        listActive,
        listDelete,
        listLocked,
        Random
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
