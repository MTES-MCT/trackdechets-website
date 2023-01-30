import * as React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";
import { Container } from "../Container";
import { Section, SectionHeading } from "../Section";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../constants/theme";

const Iframe = styled.iframe`
  width: 100%;
  margin: auto;
  background-color: transparent;
`;

/**
 * Getting iframe's target height is hard due to safety restrictions
 * Here we get empiric height values from…trying
 * Values should be updated according to target page layout future evolutions
 * @returns Getting
 */
const getHeight = () => {
  const isExtraLarge = useMediaQuery({
    query: `(min-width: ${breakpoints.extraLarge})`,
  });
  const isLarge = useMediaQuery({ query: `(min-width: ${breakpoints.large})` });

  const isSmall = useMediaQuery({
    query: `(min-width: ${breakpoints.small})`,
  });

  if (isExtraLarge) {
    return "4470";
  }
  if (isLarge) {
    return "4700";
  }

  if (isSmall) {
    return "5500";
  }
  return "5800";
};
export function Stats() {
  const height = getHeight();

  return (
    <Layout>
      <Container>
        <Section>
          <Iframe
            src="https://statistiques.trackdechets.beta.gouv.fr"
            frameBorder="0"
            height={height}
          />
        </Section>
      </Container>
    </Layout>
  );
}
