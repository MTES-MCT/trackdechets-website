import * as React from "react";
import styled from "styled-components";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import { List, ListItem } from "../../List";
import { Section, SectionHeading } from "../../Section";
import { Button } from "../../Button";
import illustrationStats from "./assets/illustrationStats.svg";

const StatItem = styled.article`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing(6)};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.up("large")} {
    margin-bottom: ${(props) => props.theme.spacing(12)};

    &::after {
      content: "";
      flex: 1;
    }
    &::after {
      background-color: ${(props) => props.theme.colors.gray.light};
    }
  }
`;
const StatItemInner = styled(Container)`
  @media ${(props) => props.theme.breakpoints.up("large")} {
    display: flex;
    align-items: center;
    padding: 0;
  }
`;
const StatItemInnerContent = styled.div`
  flex: 1;
  padding: ${(props) => props.theme.spacing(5)};
  background-color: ${(props) => props.theme.colors.gray.light};
`;
const ProfilesItemList = styled(List)`
  margin-bottom: ${(props) => props.theme.spacing(2)};

  &:last-child {
    margin-bottom 0;
  }
`;
const StatItemInnerIllustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("large")} {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export function Stats() {
  return (
    <Section>
      <Container>
        <SectionHeading>Qui utilise Trackdéchets et comment ?</SectionHeading>
      </Container>
      <StatItem>
        <StatItemInner>
          <StatItemInnerIllustration>
            <img
              src={illustrationStats}
              alt="Collecteur de déchets"
              width="250"
              loading="lazy"
            />
          </StatItemInnerIllustration>
          <StatItemInnerContent>
            <Typography variant="h3" gutterBottom>
              <strong>Consultez nos statistiques d'usage</strong>
            </Typography>

            <ProfilesItemList color="muted">
              <ListItem>
                Quantité de déchets traités ou suivis par semaine, par opération, par type
                de bordereau.
              </ListItem>
              <ListItem>
                Établissements, utilisateurs, créations de comptes.
              </ListItem>
              <ListItem>
                Nombre de bordereaux créés.
              </ListItem>
              <div>
                <Button type="button" size="large" as="a" href="/stats">
                  Consulter les statistiques
                </Button>
              </div>
            </ProfilesItemList>
          </StatItemInnerContent>
        </StatItemInner>
      </StatItem>
    </Section>
  );
}
