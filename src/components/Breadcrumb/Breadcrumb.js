import React from "react";
import { DefaultStyledBreadcrumb } from "./Breadcrumb.styled";

const Breadcrumb = (props) => {
  return <DefaultStyledBreadcrumb>{props.children}</DefaultStyledBreadcrumb>;
};

export default Breadcrumb;
