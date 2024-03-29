// Library Imports
import React from "react";

// Relative Imports
import { Container, Field, Labels, Wrapper, Button } from "./styles";
import { Label, Error } from "../../../constants/type.js";

const Toggle = ({
  type,
  placeholder,
  label,
  error,
  onChange,
  name,
  value,
  width,
  readOnly,
  onClick,
  reveal
}) => {
  return (
    <Container width={width}>
      <Labels>
        <Label>{label}</Label>
        <Error>{error}</Error>
      </Labels>
      <Wrapper>
        <Field
          type={reveal ? "" : "password"}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
        />
        <Button onClick={onClick}>{reveal ? "Hide" : "Show"}</Button>
      </Wrapper>
    </Container>
  );
};

export default Toggle;
