import React from "react";

import { DefaultStyledBreadcrumbItem } from "./BreadcrumbItem.styled";

export const BreadcrumbItem = (props) => {
  return (
    <DefaultStyledBreadcrumbItem active={props.active}>
      {props.href ? <a href={props.href}>{props.children}</a> : props.children}
    </DefaultStyledBreadcrumbItem>
  );
};
