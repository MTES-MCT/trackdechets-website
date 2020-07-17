import styled from "styled-components";

export const Link = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: underline;
`;
