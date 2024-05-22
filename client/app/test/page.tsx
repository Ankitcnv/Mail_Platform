"use client";
import React, { useState } from "react";

interface InputPair {
  key: string;
  value: string;
}

const DynamicInputFields: React.FC = () => {
  const [inputPairs, setInputPairs] = useState<InputPair[]>([
    { key: "", value: "" },
  ]);

  const handleInputChange = (
    index: number,
    key: keyof InputPair,
    value: string
  ) => {
    const newInputPairs = [...inputPairs];
    newInputPairs[index][key] = value;
    setInputPairs(newInputPairs);
  };

  const addInputPair = () => {
    setInputPairs([...inputPairs, { key: "", value: "" }]);
  };

  const removeInputPair = (index: number) => {
    const newInputPairs = [...inputPairs];
    newInputPairs.splice(index, 1);
    setInputPairs(newInputPairs);
  };

  const handleSubmit = () => {
    const formData = inputPairs.map((inputPair) => ({
      key: inputPair.key.trim(),
      value: inputPair.value.trim(),
    }));
  };

  return (
    <div>
      {inputPairs.map((inputPair, index) => (
        <div key={index}>
          <input
            type="text"
            value={inputPair.key}
            className="outline outline-lime-700 p-3 m-3"
            placeholder="Key"
            onChange={(e) => handleInputChange(index, "key", e.target.value)}
          />
          <input
            type="text"
            value={inputPair.value}
            className="outline outline-lime-700 p-3 m-3"
            placeholder="Value"
            onChange={(e) => handleInputChange(index, "value", e.target.value)}
          />
          <button onClick={() => removeInputPair(index)}>Remove</button>
        </div>
      ))}
      <button
        onClick={addInputPair}
        className="bg-slate-900 p-2 m-2 text-white rounded-lg">
        Add Input Pair
      </button>
      <button
        onClick={handleSubmit}
        className="bg-slate-900 p-2 m-2 text-white rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default DynamicInputFields;
