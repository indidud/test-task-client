import { HTMLSelect } from "@blueprintjs/core";
import { ConfigParametersInput } from "../../types";

type SelectProps = {
  data: ConfigParametersInput;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
};

export default function Select(props: SelectProps) {
  return (
    <HTMLSelect name={props.data.name} onChange={props.onChange}>
      {props.data.items?.map((i) => (
        <option key={i.value} value={i.value}>
          {i.title}
        </option>
      ))}
    </HTMLSelect>
  );
}
