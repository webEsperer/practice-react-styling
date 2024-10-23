import styled from "styled-components";

const DefaultStyledBreadcrumbItem = styled.li`
  color: ${(props) => (props.active ? "#6c757d" : "")};
  & + & {
    padding-left: 0.5rem;
  }
  & + &::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
`;

export { DefaultStyledBreadcrumbItem };
