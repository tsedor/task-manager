import styled from 'styled-components';

import { colors, css } from '../../cfg';

export const Input = styled.input`
  background-color: ${colors.white};
  border: 1px ${colors.grey} solid;;
  border-radius: ${css.borderRadius};
  color: ${colors.darkGrey};
  font-size: .8em;
  font-weight: 500;
  margin: 0 0 10px 0;
  padding: ${css.padding.small} ${css.padding.medium};
  transition: all .3s ease-in;
  &:focus {
    border: 1px ${colors.primary} solid;
    outline: none;
  }
`;