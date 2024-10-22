import React from "react";

import { StyledButton } from "./Button.styled";

const Button = ({ variant, size, active, disabled, children }) => {
  return (
    <StyledButton variant={variant} size={size} active>
      {children}
    </StyledButton>
  );
};

export default Button;
