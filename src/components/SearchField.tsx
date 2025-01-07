import {
  Input,
  Label,
  SearchField as RASearchField,
  type SearchFieldProps,
} from "react-aria-components";

interface Props extends SearchFieldProps {
  label?: string;
}

export const SearchField = (props: Props) => {
  return (
    <RASearchField {...props}>
      {props.label && <Label>{props.label}</Label>}

      <Input
        className="shadow-down h-10 w-full rounded p-2"
        type="text"
        name="keyword"
      />
    </RASearchField>
  );
};
