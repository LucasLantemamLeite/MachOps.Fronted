import { useState } from "react";
import { handlerValue } from "../../Utils/Handlers";

export function Input({ name = null, id = null, className = null, type = "text", initialValue = "", placeholder = null, textLabel = null }) {
  const [value, setValue] = useState(initialValue);

  return (
    <>
      {textLabel && <label htmlFor={id}>{textLabel}</label>}
      <input name={name} id={id} className={className} type={type} value={value} placeholder={placeholder} onChange={(e) => handlerValue(e, setValue)} />
    </>
  );
}
