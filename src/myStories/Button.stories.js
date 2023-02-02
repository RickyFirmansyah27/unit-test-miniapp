import React from 'react';
import { Button } from './Button';

export default {
  title: 'MyStory/Button',
  component: Button,

};

const ButtonStories = (args) => <Button {...args} />;


export const success = ButtonStories.bind({});
success.args = {
  model:'success',
  label: 'Sucess',
};

export const info = ButtonStories.bind({});
info.args = {
  model:'info',
  label: 'Info',
};

export const danger = ButtonStories.bind({});
danger.args = {
  model:'danger',
  label: 'Danger',
};
