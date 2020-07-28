import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0 0 0 ${(props) => props.theme.spacing(3)};
`;
export const ListItem = styled.li`
  margin-bottom: ${(props) => props.theme.spacing(1)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const UnstyledList = styled(List)`
  list-style: none;
  padding: 0;
`;
export const UnstyledListItem = styled(ListItem)``;

export const InlineList = styled(UnstyledList)`
  display: flex;
`;
export const InlineListItem = styled(UnstyledListItem)`
  padding-right: ${(props) => props.theme.spacing(2)};

  &:last-child {
    padding-right: 0;
  }
`;
