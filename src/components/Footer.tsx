import * as React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "gatsby";
import { Container } from "./Container";
import { UnstyledList, UnstyledListItem } from "./List";
import { Typography } from "./Typography";
import { Link } from "./Link";
import fabriquenumerique from "./assets/fabriquenumerique.svg";
import politiquedeconfidentialite from "./assets/politique-de-confidentialite.pdf";

const FooterContainer = styled.footer`
  padding: ${(props) => props.theme.spacing(5)} 0;
  color: ${(props) => props.theme.colors.common.white};
  background-color: ${(props) => props.theme.colors.common.black};
`;
const FooterInnerContainer = styled(Container)`
  @media ${(props) => props.theme.breakpoints.up("medium")} {
    display: flex;
    align-items: center;
  }
`;
const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.common.white};
  text-decoration: none;
`;

const FooterSummary = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing(2)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    margin-bottom: 0;
  }
`;
const FooterSummaryLogo = styled.div``;
const FooterSummaryContent = styled.div`
  padding-left: ${(props) => props.theme.spacing(2)};
  max-width: 20rem;
`;

const FooterLinks = styled.div``;

export function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterSummary>
          <FooterSummaryLogo>
            <img
              src={fabriquenumerique}
              alt="Logo de La Fabrique Numérique"
              width="150"
            />
          </FooterSummaryLogo>
          <FooterSummaryContent>
            Trackdéchets est un service numérique de l'Etat incubé à la Fabrique
            Numérique du Ministère de la Transition écologique et solidaire,
            membre du réseau d’incubateurs{" "}
            <FooterLink href="https://beta.gouv.fr/">beta.gouv.fr</FooterLink>
          </FooterSummaryContent>
        </FooterSummary>
        <FooterLinks>
          <Typography>
            <strong>À propos de Trackdéchets</strong>
          </Typography>
          <UnstyledList>
            <UnstyledListItem>
              <FooterLink href="mailto:emmanuel.flahaut@developpement-durable.gouv.fr">
                Nous contacter
              </FooterLink>
            </UnstyledListItem>
            <UnstyledListItem>
              <FooterLink href="https://faq.trackdechets.fr/">
                Foire aux questions
              </FooterLink>
            </UnstyledListItem>
            <UnstyledListItem>
              <FooterLink href="https://developers.trackdechets.beta.gouv.fr/">
                Espace développeur
              </FooterLink>
            </UnstyledListItem>
            <UnstyledListItem>
              <FooterLink as={RouterLink} to="/cgu">
                Conditions générales d'utilisation
              </FooterLink>
            </UnstyledListItem>
            <UnstyledListItem>
              <FooterLink href={politiquedeconfidentialite}>
                Politique de confidentialité
              </FooterLink>
            </UnstyledListItem>
            <UnstyledListItem>
              <FooterLink as={RouterLink} to="/stats">
                Statistiques
              </FooterLink>
            </UnstyledListItem>
            <UnstyledListItem>
              <FooterLink href="https://drive.google.com/open?id=1To5yrG6jO3-bh9jRqyi334mXT1LqGCjE">
                Boîte à outils communication
              </FooterLink>
            </UnstyledListItem>
          </UnstyledList>
        </FooterLinks>
      </FooterInnerContainer>
    </FooterContainer>
  );
}
