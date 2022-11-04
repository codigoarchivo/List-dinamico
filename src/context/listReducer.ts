import { ListState } from "./";
import { IList } from "../interfaces";

type ListActionType =
  | { type: "[Counter] - List"; payload: IList[] }
  | { type: "[Counter] - List - Random"; payload: IList[] }
  | { type: "[Counter] - List - Locked"; payload: IList[] }
  | { type: "[Counter] - List - Add"; payload: IList }
  | { type: "[Counter] - List - Edit"; payload: IList }
  | { type: "[Counter] - List - Delete"; payload: IList }
  | { type: "[Counter] - List - Active"; payload: IList; word: string };

export const listReducer = (
  state: ListState,
  action: ListActionType
): ListState => {
  switch (action.type) {
    case "[Counter] - List":
    case "[Counter] - List - Random":
    case "[Counter] - List - Locked":
      return {
        ...state,
        list: action.payload
      };
    case "[Counter] - List - Add":
      return {
        ...state,
        list: [action.payload, ...state.list]
      };
    case "[Counter] - List - Edit":
      return {
        ...state,
        list: state.list.map((i) =>
          i.id === action.payload.id ? action.payload : i
        )
      };
    case "[Counter] - List - Delete":
      return {
        ...state,
        list: state.list.filter((d) => !(d.id === action.payload.id))
      };
    case "[Counter] - List - Active":
      return {
        ...state,
        active: action.payload,
        isLoaded: !state.isLoaded,
        word: action.word
      };
    default:
      return state;
  }
};
