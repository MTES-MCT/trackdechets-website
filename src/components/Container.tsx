import styled from "styled-components";

export const Container = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing(2)};
`;

export const FullWidthContainer = styled.div`
  margin: 0 auto;
  padding: 0;
`;
