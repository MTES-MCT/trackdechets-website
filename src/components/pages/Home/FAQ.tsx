import React from "react";
import styled from "styled-components";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import { Link } from "../../Link";
import { Question, QuestionQuestion, QuestionAnswer } from "../../Question";

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

export function FAQ() {
  return (
    <FAQContainer>
      <FAQInnerContainer>
        <FAQHeading>Ce qu'il faut savoir sur Trackdéchets</FAQHeading>
        <FAQQuestions>
          <Question>
            <QuestionQuestion>
              Où en est l’outil Trackdéchets ?<br />
              Peut-on l’utiliser ?
            </QuestionQuestion>
            <QuestionAnswer>
              Trackdéchets est un outil numérique gratuit, développé par le
              Ministère de la Transition Écologique et Solidaire sous la forme
              d’une “start-up d’Etat” depuis 2018.
            </QuestionAnswer>
            <QuestionAnswer>
              Dans le cadre des évolutions réglementaires (loi économie
              circulaire), cet outil sera généralisé à tous les acteurs
              concernés par la traçabilité des déchets dangereux en 2021.
            </QuestionAnswer>
          </Question>
          <Question>
            <QuestionQuestion>
              Est-ce que je peux l’utiliser même si j’ai déjà un outil de
              gestion des déchets ?
            </QuestionQuestion>
            <QuestionAnswer>
              Oui, Trackdéchets est un outil de traçabilité et non un outil de
              gestion des déchets (pas de facturation, bon de commande, etc.) :
              ce sont des outils complémentaires.
            </QuestionAnswer>
            <QuestionAnswer>
              Si vous avez un outil, vous pourrez le connecter à la plateforme
              grâce à l’API Trackdéchets. Pour savoir plus consultez{" "}
              <Link href="https://developers.trackdechets.beta.gouv.fr/">
                la documentation Développeur
              </Link>
              .
            </QuestionAnswer>
          </Question>
          <Question>
            <QuestionQuestion>
              Qui est concerné par Trackdéchets ?
            </QuestionQuestion>
            <QuestionAnswer>
              Tous les acteurs présents sur une chaîne de traçabilité sont
              concernés par Trackdéchets, car la mission de cette plateforme est
              notamment de garantir la circulation de l’information de
              traçabilité d’un bout à l’autre de la chaîne.
            </QuestionAnswer>
          </Question>
          <Question>
            <QuestionQuestion>
              D’autres questions sur Trackdéchets ?<br />
              <Link href="https://faq.trackdechets.fr/">
                Consultez notre FAQ.
              </Link>
            </QuestionQuestion>
            <img src="https://placehold.it/500x290" alt="" />
          </Question>
        </FAQQuestions>
      </FAQInnerContainer>
    </FAQContainer>
  );
}
