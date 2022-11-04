import { FC, useContext } from "react";
import { ListContext } from "../context";
import { INITIAL_STATES } from "../database";
import { useForm } from "../hooks";

export const DelList: FC = () => {
  const { listActive, active, listDelete, word } = useContext(ListContext);

  const { values, handleInputChange, reset } = useForm(active);

  const { name, email } = values;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    listDelete(values);

    reset();
    listActive(INITIAL_STATES, "");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <form className={"form__list"} onSubmit={handleSubmit}>
        <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Esta seguro de eliminar
        </h1>
        <div style={{ marginBottom: "10px" }}>
          <input
            disabled={true}
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            disabled={true}
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div style={{ padding: "5px" }}>
          <button style={{ marginLeft: "2px" }} type="submit">
            {word}
          </button>
        </div>
      </form>
    </div>
  );
};
