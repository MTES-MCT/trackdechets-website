import styled from "styled-components";
import { Typography } from "./Typography";

export const Section = styled.section`
  padding: ${(props) => props.theme.spacing(6)} 0;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    padding: ${(props) => props.theme.spacing(12)} 0;
  }

  & + & {
    padding-top: 0;
  }
`;

export const SectionHeading = styled(Typography).attrs({
  as: "h2",
  variant: "h2",
})`
  margin-bottom: ${(props) => props.theme.spacing(6)};
`;
