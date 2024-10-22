import React from "react";

import { StyledButton } from "./Button.styled";

const Button = ({ variant, size, children }) => {
  return (
    <StyledButton variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
