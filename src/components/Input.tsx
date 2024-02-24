import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $withButton?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

Input.displayName = "Input";

const StyledInput = styled.input<{ $withButton?: boolean }>`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 6.125px;
  color: #ffffff;
  padding: ${({ $withButton }) => ($withButton ? "8px 90px 8px 8px" : "8px")};
  border: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
`;

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return <StyledTextArea ref={ref} {...props} />;
});

TextArea.displayName = "TextArea";

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 6.125px;
  color: #ffffff;
  padding: 8px;
  border: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  resize: none;
  outline: none;
`;

export { Input, TextArea };
