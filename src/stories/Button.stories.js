import React from 'react';
import { action } from '@storybook/addon-actions';
// import { withDesign } from 'storybook-addon-designs';

import { ThemeProvider } from 'styled-components';
import baseTheme from '../themes/baseTheme';


import Button from '../components/Button';

export default {
  title: 'Button Story',
};

export const ButtonStory = () => (
  <ThemeProvider theme={baseTheme}>
    <Button onClick={action('clicked')} text="Halp!"></Button>
  </ThemeProvider>
);

ButtonStory.story = {
  name: 'Example Button',
}
