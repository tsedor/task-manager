import styled from 'styled-components';

import { colors, css } from '../../cfg';

export const Button = styled.button`
  background-color: ${colors.primary};
  border: 1px transparent solid;
  border-radius: ${css.borderRadius};
  color: ${colors.textAlternative};
  cursor: pointer;
  font-size: .8em;
  font-weight: 500;
  padding: ${css.padding.small} ${css.padding.medium};
  transition: ${css.transition};
  &:focus {
    border: 1px #000 solid;
    outline: none;
  }
  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;