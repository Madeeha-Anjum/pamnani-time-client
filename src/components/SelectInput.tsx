"use client";
import React from "react";

interface SelectInputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  return (
    <>
      <div>
        <label htmlFor={props.id} className="block text-sm font-semibold">
          {props.label}
        </label>
        <select
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="block w-full px-3 py-2 border-2 border-black rounded mt-1 appearance-none"
        >
          {props.options.map((option, idx) => (
            <option
              key={option.value}
              value={option.value}
              disabled={idx === 0}
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className="block mt-2 text-sm font-semibold text-secondary text-transparent">
          Error: Invalid User
        </span>
      </div>
    </>
  );
};

export default SelectInput;
