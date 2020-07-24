import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import illustrationHero from "./assets/illustrationHero.png";

const HeroContainer = styled.section`
  padding: ${(props) => props.theme.spacing(6)} 0;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    padding: ${(props) => props.theme.spacing(12)} 0;
  }
`;
const HeroInnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    text-align: left;
    flex-direction: row-reverse;
  }
`;
const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeroHeading = styled(Typography).attrs({ as: "h1", variant: "h1" })`
  max-width: 26rem;
  margin-bottom: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    margin-bottom: ${(props) => props.theme.spacing(13)};
  }
`;
const HeroAction = styled.div`
  text-align: center;
`;
const HeroIllustration = styled.div`
  margin-bottom: ${(props) => props.theme.spacing(2)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    margin-bottom: 0;
  }
`;

export function Hero() {
  return (
    <HeroContainer>
      <HeroInnerContainer>
        <HeroIllustration>
          <img src={illustrationHero} alt="" width="640" />
        </HeroIllustration>
        <HeroContent>
          <HeroHeading>
            Gérer la traçabilité des déchets en toute sécurité
          </HeroHeading>
          <HeroAction>
            <Button
              variant="secondary"
              size="large"
              as="a"
              href="https://trackdechets.beta.gouv.fr/signup"
            >
              Créer un compte
            </Button>
          </HeroAction>
        </HeroContent>
      </HeroInnerContainer>
    </HeroContainer>
  );
}
