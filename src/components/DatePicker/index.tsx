import { format } from "date-fns";

import { Input } from "./styles";
import { DatePickerProps } from "./types";

export const DatePicker: React.FC<DatePickerProps> = (
  props: DatePickerProps
): JSX.Element => {
  return (
    <Input
      type="date"
      defaultValue={format(new Date(), "yyyy-MM-dd")}
      onChange={props.onChange}
      min="1995-06-17"
      max={format(new Date(), "yyyy-MM-dd")}
    />
  );
};
