import React from "react";
import { FormGroup } from "@blueprintjs/core";
import { ConfigParametersInput } from "../../types";

type InputProps = {
  data: ConfigParametersInput;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return (
    <FormGroup label={props.data.title} labelFor="text-input">
      <input
        type="number"
        onChange={props.onChange}
        name={props.data.name}
        id="text-input"
        placeholder="Placeholder text"
      />
    </FormGroup>
  );
}
