import React from 'react';
import { TextField } from '../components/TextField';
import { withKnobs } from "@storybook/addon-knobs";
// import { action } from '@storybook/addon-actions';

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
