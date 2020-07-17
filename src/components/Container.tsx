import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing(2)};
`;
