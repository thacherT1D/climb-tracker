import React from 'react';
import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
} from '../themes/baseTheme';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? colors.purpleMedium : colors.lightestGrey)};
  border: 1px solid ${props => (props.checked ? colors.purpleMedium : colors.lightGrey)};
  border-radius: 2px;

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const InputLabel = styled.span`
  font-size: ${fontSizes[1]}px;
  font-weight: ${fontWeights.medium};
  font-family: ${fonts.default};
  padding: 0 0 0 8px;
  color: ${props => (props.color ? props.color : colors.text.primary)};
`;

const Checkbox = ({ className, checked, ...props }) => (
  <div>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <InputLabel>{props.inputLabel}</InputLabel>
  </div>
);

export default Checkbox;
