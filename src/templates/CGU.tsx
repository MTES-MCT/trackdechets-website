import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import {
  Header,
  Layout,
  Footer,
  Container,
  Section,
  HASTRoot,
  HASTNode,
} from "../components";

const CGUContainer = styled(Section)`
  h1 {
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.spacing(4)};
  }

  h2,
  h3 {
    margin-top: ${(props) => props.theme.spacing(4)};
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }

  p,
  ul {
    margin-bottom: ${(props) => props.theme.spacing(1)};
  }
`;

interface CGUProps {
  data: {
    markdownRemark: {
      htmlAst: HASTRoot;
    };
  };
}

export default function CGU({
  data: {
    markdownRemark: { htmlAst },
  },
}: CGUProps) {
  return (
    <Layout>
      <Header />

      <CGUContainer>
        <Container>
          <HASTNode node={htmlAst} />
        </Container>
      </CGUContainer>

      <Footer />
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetCGU($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
    }
  }
`;
