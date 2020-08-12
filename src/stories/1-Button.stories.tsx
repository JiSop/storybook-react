import React from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import {Button} from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Options = () => {
  const label = text("label", "Button");
  const outline = boolean('outline', false);
  const roundShape = boolean('roundShape', false);
  const fullWidth = boolean('fullWidth', false);
  const disabled = boolean('disabled', false);
  return (
    <Button 
      outline={outline} 
      roundShape={roundShape} 
      fullWidth={fullWidth}
      disabled={disabled}
      >
      {label}
    </Button>
    );
};
