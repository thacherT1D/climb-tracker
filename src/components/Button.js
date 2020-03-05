import React from 'react';
import { Button as Base } from 'rebass/styled-components';
import styled from 'styled-components';

import { ButtonFont } from './FontStyles';
// import { ButtonFont as ButtonBase } from './FontStyles';

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
      <ButtonFont {...props}>Button Component</ButtonFont>
    </StyledButton>
  );
};

export default Button;
