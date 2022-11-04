import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ListContext } from "../context";
import { INITIAL_STATES } from "../database";
import { useForm } from "../hooks";

export const AddList = () => {
  const { listAdd, listActive, active, listEdit, word } = useContext(
    ListContext
  );

  const initial = word === "Edit" ? active : INITIAL_STATES;

  const { values, handleInputChange, reset } = useForm(initial);

  const [valid, setValid] = useState(false);

  const { name, email, locked } = values;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValid(false);

    if ([name, email].includes("")) {
      setValid(true);
      setTimeout(() => setValid(false), 2000);
      return;
    }

    if (word === "Edit") {
      listEdit(values);
    } else {
      const id = uuidv4();
      listAdd({ id, name, email, locked });
    }

    reset();
    listActive(INITIAL_STATES, "");
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "1rem"
      }}
    >
      <div>{valid ? "Hay campos vacios" : ""}</div>
      <form className={"form__list"} onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <button type="submit">{word}</button>
        </div>
      </form>
    </div>
  );
};
