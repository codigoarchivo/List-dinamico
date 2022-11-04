import { useContext } from "react";
import { AiFillSave } from "react-icons/ai";
import { ListContext } from "../context";
import { ScreenList } from "./";
import { AddList, DelList } from "./";
import { INITIAL_STATES } from "../database";

// import { seedDatabase } from "../database";

export const DataList = () => {
  const { list, isLoaded, listActive, word, Random } = useContext(ListContext);

  return (
    <>
      <div style={{ padding: "30px", backgroundColor: "purple" }}>
        <h1 style={{ color: "white" }}>List Dinamico</h1>
        <hr />
        <br />

        <div style={{ padding: "5px" }}>
          <button onClick={() => listActive(INITIAL_STATES, "Add")}>
            {" "}
            <AiFillSave fontSize={25} />
          </button>
          <button onClick={() => Random()} style={{ marginLeft: "5px" }}>
            Random
          </button>
        </div>
        <hr />
        <br />
      </div>

      <div>
        {word === "Delete" ? isLoaded && <DelList /> : isLoaded && <AddList />}
      </div>

      <div
        style={{
          padding: "5px",
          display: list.length !== 0 ? "block" : "none"
        }}
      >
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Correo</th>
              <th>Action</th>
            </tr>
          </thead>
          {list.map((data, key) => (
            <ScreenList data={data} key={key} />
          ))}
        </table>
      </div>
    </>
  );
};
