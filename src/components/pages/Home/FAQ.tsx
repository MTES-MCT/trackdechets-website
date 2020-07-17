import React from "react";
import styled from "styled-components";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import { Link } from "../../Link";

const FAQContainer = styled.section`
  padding-top: ${(props) => props.theme.spacing(6)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    padding-top: ${(props) => props.theme.spacing(12)};
  }
`;
const FAQInnerContainer = styled(Container)``;
const FAQHeading = styled(Typography).attrs({ as: "h2", variant: "h2" })`
  margin-bottom: ${(props) => props.theme.spacing(6)};
`;

const FAQQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const FAQQuestionsItem = styled.article``;
const FAQQuestionsItemQuestion = styled(Typography).attrs({
  variant: "body1",
})`
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;
const FAQQuestionsItemAnswer = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(1)};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    padding-left: ${(props) => props.theme.spacing(13)};
  }
`;

export function FAQ() {
  return (
    <FAQContainer>
      <FAQInnerContainer>
        <FAQHeading>Ce qu'il faut savoir sur Trackdéchets</FAQHeading>
        <FAQQuestions>
          <FAQQuestionsItem>
            <FAQQuestionsItemQuestion>
              Où en est l’outil Trackdéchets ?<br />
              Peut-on l’utiliser ?
            </FAQQuestionsItemQuestion>
            <FAQQuestionsItemAnswer>
              Trackdéchets est un outil numérique gratuit, développé par le
              Ministère de la Transition Écologique et Solidaire sous la forme
              d’une “start-up d’Etat” depuis 2018.
            </FAQQuestionsItemAnswer>
            <FAQQuestionsItemAnswer>
              Dans le cadre des évolutions réglementaires (loi économie
              circulaire), cet outil sera généralisé à tous les acteurs
              concernés par la traçabilité des déchets dangereux en 2021.
            </FAQQuestionsItemAnswer>
          </FAQQuestionsItem>
          <FAQQuestionsItem>
            <FAQQuestionsItemQuestion>
              Est-ce que je peux l’utiliser même si j’ai déjà un outil de
              gestion des déchets ?
            </FAQQuestionsItemQuestion>
            <FAQQuestionsItemAnswer>
              Oui, Trackdéchets est un outil de traçabilité et non un outil de
              gestion des déchets (pas de facturation, bon de commande, etc.) :
              ce sont des outils complémentaires.
            </FAQQuestionsItemAnswer>
            <FAQQuestionsItemAnswer>
              Si vous avez un outil, vous pourrez le connecter à la plateforme
              grâce à l’API Trackdéchets. Pour savoir plus consultez{" "}
              <Link href="https://developers.trackdechets.beta.gouv.fr/">
                la documentation Développeur
              </Link>
              .
            </FAQQuestionsItemAnswer>
          </FAQQuestionsItem>
          <FAQQuestionsItem>
            <FAQQuestionsItemQuestion>
              Qui est concerné par Trackdéchets ?
            </FAQQuestionsItemQuestion>
            <FAQQuestionsItemAnswer>
              Tous les acteurs présents sur une chaîne de traçabilité sont
              concernés par Trackdéchets, car la mission de cette plateforme est
              notamment de garantir la circulation de l’information de
              traçabilité d’un bout à l’autre de la chaîne.
            </FAQQuestionsItemAnswer>
          </FAQQuestionsItem>
          <FAQQuestionsItem>
            <FAQQuestionsItemQuestion>
              D’autres questions sur Trackdéchets ?<br />
              <Link href="https://faq.trackdechets.fr/">
                Consultez notre FAQ.
              </Link>
            </FAQQuestionsItemQuestion>
            <img src="https://placehold.it/500x290" alt="" />
          </FAQQuestionsItem>
        </FAQQuestions>
      </FAQInnerContainer>
    </FAQContainer>
  );
}
