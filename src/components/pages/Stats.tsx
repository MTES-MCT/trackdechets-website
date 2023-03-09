import * as React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";
import { FullWidthContainer } from "../Container";
import { Section } from "../Section";
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
    return "6750";
  }
  if (isLarge) {
    return "7000";
  }

  if (isSmall) {
    return "7600";
  }
  return "8870";
};
export function Stats() {
  const height = getHeight();

  return (
    <Layout>
      <FullWidthContainer>
        <Section>
          <Iframe
            src="https://statistiques.trackdechets.beta.gouv.fr"
            frameBorder="0"
            height={height}
          />
        </Section>
      </FullWidthContainer>
    </Layout>
  );
}
