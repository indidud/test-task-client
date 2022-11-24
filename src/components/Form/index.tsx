import React, { useState } from "react";
import { Button } from "@blueprintjs/core";
import Input from "../Input";
import Select from "../Select";
import { Config, ConfigParametersInputType } from "../../types";

type FormProps = {
  config: Config;
  onSubmit: (data: any) => Promise<void>;
};

export default function Form(props: FormProps) {
  const { config } = props;
  const [formData, setFormData] = useState<any>({});

  function handleFormSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    props.onSubmit(formData);

    setFormData({})
  }

  function handleFormFieldChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({
        ...formData,
        [e.currentTarget.name]: e.currentTarget.value
    })
  }
  return (
    <form onSubmit={handleFormSubmit}>
      {config.parameters.input.map((i) => (
        <div className="form-group" key={i.name}>
          {i.type === ConfigParametersInputType.NUMBER && <Input data={i} onChange={handleFormFieldChange} />}
          {i.type === ConfigParametersInputType.SELECT && <Select data={i} onChange={handleFormFieldChange}  />}
        </div>
      ))}

      <Button className="form-btn" type="submit" text="Submit" />
    </form>
  );
}
