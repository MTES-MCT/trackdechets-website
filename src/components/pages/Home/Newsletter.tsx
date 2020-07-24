import * as React from "react";
import styled from "styled-components";
import { RiMailLine } from "react-icons/ri";
import { Container } from "../../Container";
import { Button } from "../../Button";
import { Section } from "../../Section";

const NewsletterInnerContainer = styled(Container)`
  text-align: center;
`;

export function Newsletter() {
  return (
    <Section>
      <NewsletterInnerContainer>
        <Button endIcon={<RiMailLine />}>
          S'inscrire à la newsletter Trackdéchets
        </Button>
      </NewsletterInnerContainer>
    </Section>
  );
}
