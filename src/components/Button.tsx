import * as React from "react";
import styled, { css } from "styled-components";

const ButtonIcon = styled.span`
  display: inline-block;
  vertical-align: text-top;

  &:first-child {
    margin-right: ${(props) => props.theme.spacing(1)};
  }

  &:last-child {
    margin-left: ${(props) => props.theme.spacing(1)};
  }
`;

interface ButtonContainerProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "large" | "normal";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  font: inherit;
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
  padding: 0;
  text-decoration: none;

  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  position: relative;

  &:focus::before {
    content: "";
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    border: 2px solid ${(props) => props.theme.colors.primary.light};
    pointer-events: none;
  }

  ${(props) => {
    switch (props.variant) {
      case "ghost":
        return css`
          color: ${props.theme.colors.primary.main};
          background-color: transparent;
          border-color: ${props.theme.colors.primary.main};
        `;
      case "secondary":
        return css`
          color: ${props.theme.colors.secondary.contrastText};
          background-color: ${props.theme.colors.secondary.main};
        `;
      case "primary":
      default:
        return css`
          color: ${props.theme.colors.primary.contrastText};
          background-color: ${props.theme.colors.primary.main};
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          font-size: 1.2rem;
          padding: 0.8rem 2rem;
        `;
      case "normal":
      default:
        return css`
          padding: 0.6rem 0.8rem;
        `;
    }
  }}
`;

interface ButtonProps extends ButtonContainerProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {startIcon && <ButtonIcon>{startIcon}</ButtonIcon>}
      {children}
      {endIcon && <ButtonIcon>{endIcon}</ButtonIcon>}
    </ButtonContainer>
  );
}
