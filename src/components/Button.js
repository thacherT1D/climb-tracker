import React from 'react';
import { Button as Base } from 'rebass/styled-components';
import styled from 'styled-components';

import { ButtonFont } from './FontStyles';

import {
  transitions,
  colors,
} from '../themes/baseTheme';

const StyledButton = styled(Base)`
  cursor: pointer;
  transition: ${transitions.easeOut};
  background-color: ${colors.purpleMedium};
  &:hover {
    background-color: ${colors.purpleLight};
    color: ${colors.text.primary};
  }
  `;

const Button = props => {
  return (
    <StyledButton>
      <ButtonFont>{props.text}</ButtonFont>
    </StyledButton>
  );
};

export default Button;
