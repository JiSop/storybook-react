import React from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from "@storybook/addon-knobs";
import { TextField } from '../components/TextField';

export default {
  title: 'TextField',
  component: TextField,
  decorators: [withKnobs],
};

export const Input = () => {
  return (
    <TextField />
    );
};
