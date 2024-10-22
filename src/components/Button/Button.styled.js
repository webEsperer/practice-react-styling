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

const StyledButton = SizeStyledButton;

export { StyledButton };
