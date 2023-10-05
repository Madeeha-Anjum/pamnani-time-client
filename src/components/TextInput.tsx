"use client";
import React from "react";

interface TextInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <>
      <div>
        <label htmlFor={props.id} className="block mb-1 text-sm font-semibold">
          {props.label}
        </label>
        <input
          type={props.type ?? "text"}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="block w-full px-3 py-2 border-2 border-black rounded"
        />
        <span className="block mt-1 text-sm font-semibold text-secondary text-transparent">
          Error: Invalid User
        </span>
      </div>
    </>
  );
};

export default TextInput;
