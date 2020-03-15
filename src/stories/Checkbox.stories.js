import React, { useState } from 'react';

import { withDesign } from 'storybook-addon-designs';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';

import baseTheme from '../themes/baseTheme';

import Checkbox from '../components/Checkbox';
import CheckboxMaterial from '../components/CheckboxMaterial';
import CheckboxRebass from '../components/CheckboxRebass'; 
import { CheckboxGroupTitle } from '../components/FontStyles';


const withTheme = Story => (
  <ThemeProvider theme={baseTheme}>
    <Story />
  </ThemeProvider>
);

export default {
  title: 'Checkbox Story',
  decorators: [withDesign, withTheme, withKnobs],
};

export const CheckboxStory = () => {
  const labelText = () => text('Single Label Text', 'Option 1');
  const groupTitleSingle = () => text('Group Title', 'Title');

  const [isChecked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!isChecked);

  return (
    <div>
      <CheckboxGroupTitle>{groupTitleSingle()}</CheckboxGroupTitle>
      <label>
        <Checkbox
          checked={isChecked}
          onClick={toggleCheckbox}
          inputLabel={labelText()}
          />
      </label>
    </div>
  );
};

CheckboxStory.story = {
  name: 'Single Checkbox',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/iuXkrpuLTXExSnuPJE3Jtn/Tidepool-Design-System-Sprint-1?node-id=51%3A153',
    },
  },
};

export const MaterialCheckboxStory = () => {
  const [isChecked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!isChecked);

  const labelText = () => text('Label Text', 'Check Me');

  return (
    <CheckboxMaterial label={labelText()} />
  );
};

MaterialCheckboxStory.story = {
  name: 'Material UI Checkbox',
}

export const RebassCheckboxStory = () => {
  const [isChecked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!isChecked);

  const labelText = () => text('Label Text', 'Check Me');

  return (
    <CheckboxMaterial label={labelText()} />
  );
};

RebassCheckboxStory.story = {
  name: 'Rebass Checkbox',
}