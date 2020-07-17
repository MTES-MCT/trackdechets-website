import * as React from "react";
import styled from "styled-components";
import { RiMailLine } from "react-icons/ri";
import { Container } from "../../Container";
import { Button } from "../../Button";

const NewsletterContainer = styled.section`
  padding: ${(props) => props.theme.spacing(6)} 0;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    padding: ${(props) => props.theme.spacing(12)} 0;
  }
`;
const NewsletterInnerContainer = styled(Container)`
  text-align: center;
`;

export function Newsletter() {
  return (
    <NewsletterContainer>
      <NewsletterInnerContainer>
        <Button endIcon={<RiMailLine />}>
          S'inscrire à la newsletter Trackdéchets
        </Button>
      </NewsletterInnerContainer>
    </NewsletterContainer>
  );
}
