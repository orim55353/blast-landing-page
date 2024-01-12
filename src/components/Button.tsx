import React from "react";
import styled, { css } from "styled-components";
import Chevron from "@/assets/chevron.jpg";
import Image from "next/image";
import { ButtonProps } from "@/types/types";

export default function Button({
  children,
  size = "sm",
  disableIcon = false,
  ...props
}: ButtonProps) {
  return (
    <StyledButton size={size} {...props}>
      {children}
      <Image src={Chevron} alt="chevron" height={12} width={12} />
    </StyledButton>
  );
}

const StyledButton = styled.button<{ size: ButtonProps["size"] }>`
  background-color: #ffffff;
  color: #000000;
  padding: 0 8px;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.families.inter};
  border-radius: 32px;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-inline: 16px;
  height: 56px;
  width: 128px;
  ${({ size }) => getSizeStyles(size)};

  ${({ theme }) => css`
    @media ${theme.breakpoints.tablet} {
      width: 100%;
      height: 55px;
    }
  `}

  &:active {
    transform: scale(1.02);
  }
`;

const getSizeStyles = (size: ButtonProps["size"]) => {
  switch (size) {
    case "sm":
      return `
      `;
    case "lg":
      return `
        height: 64px;
        width: 240px;
      `;
    default:
      return "";
  }
};
