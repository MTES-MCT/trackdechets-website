import styled from "styled-components";

export const Link = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: underline;
  outline: none;
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
`;
