import * as React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "gatsby";
import { RiAccountCircleLine } from "react-icons/ri";
import { Container } from "./Container";
import { InlineList, InlineListItem } from "./List";
import { Link } from "./Link";
import { Button } from "./Button";
import trackdechets from "./assets/trackdechets.png";
import mtes from "./assets/mtes.svg";

const HeaderContainer = styled.header`
  padding: ${(props) => props.theme.spacing(1)} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.dark};
`;
const HeaderInnerContainer = styled(Container)`
  display: flex;
  align-items: center;
`;
const HeaderLogos = styled.div`
  flex: 1;
`;
const HeaderNav = styled.nav``;
const HeaderNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: bold;
`;

export function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderLogos>
          <img
            src={mtes}
            alt="Ministère de la Transition Écologique et Solidaire"
            width="80"
          />
          <Link as={RouterLink} to="/">
            <img src={trackdechets} alt="Trackdéchets" width="80" />
          </Link>
        </HeaderLogos>
        <HeaderNav>
          <InlineList>
            <InlineListItem>
              <HeaderNavLink href="/">Foire aux questions</HeaderNavLink>
            </InlineListItem>
            <InlineListItem>
              <HeaderNavLink href="/">Développeurs</HeaderNavLink>
            </InlineListItem>
            <InlineListItem>
              <HeaderNavLink href="/">Partenaires</HeaderNavLink>
            </InlineListItem>
            <InlineListItem>
              <Button variant="ghost" as="a" href="/">
                Créer un compte
              </Button>
            </InlineListItem>
            <InlineListItem>
              <Button as="a" href="/" endIcon={<RiAccountCircleLine />}>
                Se connecter
              </Button>
            </InlineListItem>
          </InlineList>
        </HeaderNav>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}
