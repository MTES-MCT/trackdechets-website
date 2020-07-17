import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { Container } from "../../Container";
import { Typography } from "../../Typography";

const HeroContainer = styled.section`
  padding: ${(props) => props.theme.spacing(13)} 0;
`;
const HeroInnerContainer = styled(Container)`
  display: flex;
`;
const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeroHeading = styled(Typography).attrs({ as: "h1", variant: "h1" })`
  max-width: 26rem;
  margin-bottom: ${(props) => props.theme.spacing(13)};
`;
const HeroAction = styled.div`
  text-align: center;
`;
const HeroIllustration = styled.div``;

export function Hero() {
  return (
    <HeroContainer>
      <HeroInnerContainer>
        <HeroContent>
          <HeroHeading>
            Gérer la traçabilité des déchets en toute sécurité
          </HeroHeading>
          <HeroAction>
            <Button variant="secondary" size="large">
              Créer un compte
            </Button>
          </HeroAction>
        </HeroContent>
        <HeroIllustration>
          <img src="https://placehold.it/630x340" alt="" />
        </HeroIllustration>
      </HeroInnerContainer>
    </HeroContainer>
  );
}
