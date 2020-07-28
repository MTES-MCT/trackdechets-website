import React from "react";
import styled from "styled-components";
import { Header } from "../../Header";
import { Layout } from "../../Layout";
import { Footer } from "../../Footer";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import { Question, QuestionQuestion, QuestionAnswer } from "../../Question";
import { Button } from "../../Button";
import { Section, SectionHeading } from "../../Section";
import kerlog from "./assets/kerlog.png";
import chimirec from "./assets/chimirec.png";
import sarpi from "./assets/sarpi.png";
import seche from "./assets/seche.png";
import trinov from "./assets/trinov.png";
import hensel from "./assets/hensel.png";
import alme from "./assets/alme.jpg";
import caktus from "./assets/caktus.png";
import aecr from "./assets/aecr.png";
import sarp from "./assets/sarp.png";
import colleco from "./assets/colleco.png";
import eloenergie from "./assets/elo-energie.png";
import norauto from "./assets/norauto.png";
import takeawaste from "./assets/takeawaste.png";

const BecomePartnerQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(8)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PartnersLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
const PartnersLogosItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ContactHeading = styled(Typography).attrs({
  as: "h2",
  variant: "h2",
})`
  margin-bottom: ${(props) => props.theme.spacing(6)};
`;

export function Partners() {
  return (
    <Layout>
      <Header />
      <Section>
        <Container>
          <Typography as="h1" variant="h1" gutterBottom>
            Le Partenariat avec Trackdéchets
          </Typography>
          <Typography gutterBottom>
            Trackdéchets est un outil de la Fabrique Numérique du MTES soutenu
            par la direction générale de la prévention des risques (DGPR).
          </Typography>
          <Typography gutterBottom>
            Trackdéchets a vocation à permettre la dématérialisation complète de
            la chaine du BSD, y compris pour les transporteurs. Le produit est
            en constante évolution et pourra permettre techniquement cette
            dématérialisation plus rapidement que le pas de temps nécessaire à
            une évolution de la réglementation.
          </Typography>
          <Typography>
            Ce partenariat acte l’engagement fort d’entreprises dans la démarche
            d’amélioration, de test et de déploiement de Trackdéchets. A ce
            titre, les organisations partenaires référencées sur cette page,
            seront soutenues par la DGPR en cas de contrôle du transporteur et
            comprend toute la phase de tests et de montée en puissance de
            Trackdéchets, jusqu'à l'évolution juridique.
          </Typography>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading>Devenir partenaire</SectionHeading>

          <BecomePartnerQuestions>
            <Question>
              <QuestionQuestion>Quels engagements ?</QuestionQuestion>
              <QuestionAnswer>
                La chaine des BSD que vous gérez est 100% dématérialisée.
              </QuestionAnswer>
              <QuestionAnswer>
                Votre outil de gestion des BSD (ERP, etc.) est connecté à l'API
                de Trackdéchets.
              </QuestionAnswer>
              <QuestionAnswer>
                Vous invitez vos clients et partenaires à devenir utilisateurs
                de Trackdéchets, en utilisant les supports et documents mis à
                votre disposition.
              </QuestionAnswer>
              <QuestionAnswer>
                Vous vérifiez et validez les données de la "fiche entreprise"
                qui sera proposée sur le produit (fin 2019).
              </QuestionAnswer>
            </Question>

            <Question>
              <QuestionQuestion>Quels bénéfices ?</QuestionQuestion>
              <QuestionAnswer>
                Mise en visibilité lors des diverses communication Trackdéchets
                (newsletter, présentations) et via le référencement sur le site
                Trackdéchets via la page "Partenaires".
              </QuestionAnswer>
              <QuestionAnswer>
                Appui de la DGPR pendant la phase de transition (contrôle
                routiers des BSD).
              </QuestionAnswer>
              <QuestionAnswer>
                Participation à des ateliers exclusifs sur le produit à travers
                notre comité produit restreint.
              </QuestionAnswer>
              <QuestionAnswer>
                Accès à des informations privilégiées sur l'avancement et les
                évolutions autour du produit.
              </QuestionAnswer>
            </Question>
          </BecomePartnerQuestions>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading>Nos partenaires actuels</SectionHeading>
          <PartnersLogos>
            <PartnersLogosItem>
              <img src={kerlog} alt="Kerlog" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={chimirec} alt="Chimirec" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={sarpi} alt="Sarpi-Veolia" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={seche} alt="Séché Environnement" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={trinov} alt="Trinov" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={hensel} alt="Hensel" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={alme} alt="Alme" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={caktus} alt="Caktus" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={aecr} alt="Arc en ciel recyclage" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={sarp} alt="Sarp Veolia" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={colleco} alt="Colleco" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={eloenergie} alt="Elo Énergie" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={norauto} alt="Norauto" />
            </PartnersLogosItem>
            <PartnersLogosItem>
              <img src={takeawaste} alt="Take a waste" />
            </PartnersLogosItem>
          </PartnersLogos>
        </Container>
      </Section>
      <Section>
        <Container>
          <ContactHeading>Envie de devenir partenaire ?</ContactHeading>
          <Button
            as="a"
            href="mailto:emmanuel.flahaut@developpement-durable.gouv.fr"
            variant="secondary"
            size="large"
          >
            Contactez-nous !
          </Button>
        </Container>
      </Section>
      <Footer />
    </Layout>
  );
}
