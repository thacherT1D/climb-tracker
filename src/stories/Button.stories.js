import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';
import { ButtonFont } from '../components/FontStyles';

export default {
  title: 'Button Story',
};

export const ButtonStory = () => (
  <Button onClick={action('clicked')}>Button</Button>
);

ButtonStory.story = {
  name: 'Example Button',
}
