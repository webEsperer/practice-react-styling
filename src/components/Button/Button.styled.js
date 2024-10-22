import styled from "styled-components";

const DefaultStyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  /* &:disabled {
    opacity: 0.65;
    &:hover {
      background-color: unset;
      border-color: unset;
      color: unset;
    } */
  }

 
  ${({ disabled, theme }) => disabled && theme.button.isActive.disabled}

  ${({ active }) =>
    active &&
    `
        &:hover {
            background-color: unset;
            border-color: unset;
            color: unset;
        }
    `}
`;

const VariantStyledButton = styled(DefaultStyledButton)(
  ({ theme: { button }, variant }) => {
    return button.variant[variant];
  }
);

const SizeStyledButton = styled(VariantStyledButton)(
  ({ theme: { button }, size }) => {
    return button.size[size];
  }
);

// const ActiveStyledButton = styled(SizeStyledButton)(
//   ({ theme: { button }, active, disabled }) => {
//     if (active) {
//       return button.isActive[active];
//     } else if (disabled) {
//       return button.isActive[disabled];
//     }
//     return;
//   }
// );

const StyledButton = SizeStyledButton;

export { StyledButton };
