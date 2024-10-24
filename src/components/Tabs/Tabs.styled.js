import styled, { css } from "styled-components";

const DefaultTabsStyle = styled.nav`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: 1px solid #dee2e6;
  color: #007bff;
`;

const DefaultLinkTabsStyled = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: -1px;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  &:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }
`;

const LinkDisabledTabsStyles = styled(DefaultLinkTabsStyled)(
  (props) =>
    props.disabled &&
    css`
      &&,
      &&:hover {
        color: #6c757d;
        background-color: transparent;
        border-color: transparent;
      }
    `
);

const LinkTabsStyles = styled(LinkDisabledTabsStyles)(
  (props) =>
    props.active &&
    css`
      &&,
      &&:hover {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
      }
    `
);

const ChildTabsStyled = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export { DefaultTabsStyle, ChildTabsStyled, LinkTabsStyles };
