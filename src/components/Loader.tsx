import styled from "styled-components";

export const Loader = styled.div`
  overflow: show;
  margin: 0 auto;
  border: 8px solid ${(props) => props.theme.colors.gray.main};
  border-top: 8px solid ${(props) => props.theme.colors.gray.dark};
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  border-radius: 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
