import { FC, useContext } from "react";
import {
  AiFillEdit,
  AiTwotoneDelete,
  AiFillLock,
  AiFillUnlock
} from "react-icons/ai";
import { ListContext } from "../context";
import { IList } from "../interfaces";

interface Props {
  data: IList;
}

export const ScreenList: FC<Props> = ({ data }) => {
  const { listActive, listLocked } = useContext(ListContext);
  return (
    <tbody>
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>
          <button onClick={() => listActive(data, "Edit")}>
            <AiFillEdit fontSize={15} />
          </button>
          <button onClick={() => listActive(data, "Delete")}>
            <AiTwotoneDelete fontSize={15} />
          </button>
          <button onClick={() => listLocked(data)}>
            {data.locked ? (
              <AiFillLock fontSize={15} />
            ) : (
              <AiFillUnlock fontSize={15} />
            )}
          </button>
        </td>
      </tr>
    </tbody>
  );
};
