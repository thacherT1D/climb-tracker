import React from 'react';

import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';

import baseTheme from '../themes/baseTheme';
import Button from '../components/Button';

/* eslint-disable max-len */

// Wrap each story component with the base theme
const withTheme = Story => (
  <ThemeProvider theme={baseTheme}>
    <Story />
  </ThemeProvider>
);

export default {
  title: 'Buttons',
  decorators: [withDesign, withKnobs, withTheme],
};

const disabled = () => boolean('Disabled', false);
const processing = () => boolean('Processing', false);

export const Primary = () => {
  const buttonText = () => text('Button Text', 'Primary');

  return (
    <React.Fragment>
      <Button
        variant="primary"
        disabled={disabled()}
        onClick={action('onClick called')}
        processing={processing()}
      >
        {buttonText()}
      </Button>
    </React.Fragment>
  );
};

Primary.story = {
  name: 'Primary',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/iuXkrpuLTXExSnuPJE3Jtn/Tidepool-Design-System-Sprint-1?node-id=3%3A2',
    },
  },
};

export const Secondary = () => {
  const buttonText = () => text('Button Text', 'Secondary');

  return (
    <React.Fragment>
      <Button
        variant="secondary"
        disabled={disabled()}
        onClick={action('onClick called')}
        processing={processing()}
      >
        {buttonText()}
      </Button>
    </React.Fragment>
  );
};

Secondary.story = {
  name: 'Secondary',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/iuXkrpuLTXExSnuPJE3Jtn/Tidepool-Design-System-Sprint-1?node-id=3%3A2',
    },
  },
};
