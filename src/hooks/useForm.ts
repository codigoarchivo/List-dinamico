import { useState } from "react";
import { IList } from "../interfaces";

export const useForm = (initialStates: IList) => {
  const [values, setValues] = useState(initialStates);

  // reset
  const reset = (newFormState = initialStates) => {
    setValues(newFormState);
  };

  // handleInputChange
  const handleInputChange = ({ target }: any) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return {
    values,
    handleInputChange,
    reset
  };
};
