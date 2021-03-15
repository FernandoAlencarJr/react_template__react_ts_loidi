import React from "react";
import { InputControls } from "../../components/inputs/Controls";
import { Form, useForm } from "../../hooks/useForm";
import "./App.css";

const gender: { id: string; title: string; value: string }[] = [
  {
    id: "male",
    value: "male",
    title: "male",
  },
  {
    id: "female",
    value: "female",
    title: "female",
  },
];

const InitialValue: { default: string; gender: string } = {
  default: "",
  gender: gender[0].title,
};

const App: React.FC = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("default" in fieldValues) {
      temp.default =
        fieldValues.default.length !== 10 ? "falta characteres" : "";
    }
    if ("gender" in fieldValues) {
      temp.gender =
        fieldValues.gender === "male" ? "vôce é mulher selecione mulher" : "";
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = () => {};

  const { values, errors, setErrors, handleInputChange }: any = useForm(
    InitialValue,
    true,
    validate
  );

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
