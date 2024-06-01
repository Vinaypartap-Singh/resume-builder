import { Input } from "@/components/ui/input";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputFieldTypes {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  maxLength?: number;
}

export function InputField({
  placeholder,
  type,
  required,
  onChange,
  maxLength,
}: InputFieldTypes) {
  return (
    <Input
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : "Enter Your Name"}
      className="p-8"
      required={required}
      onChange={onChange}
      maxLength={maxLength ? maxLength : 40}
    />
  );
}
