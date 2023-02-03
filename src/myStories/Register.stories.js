import React from "react";
import RegisterStories from "./RegisterStories";

export default {
  title: "MyStory/Register",
  Register: RegisterStories,
  parameters: {
    layout: "fullscreen"
  }
};

export const Register = (args) => <RegisterStories {...args} />;

export const RegisterFunction = Register.bind({});
RegisterFunction.args = {
  username: 'Ricky',
  email: 'admin@react.com',
  password: 'admin'
};

export const Style1 = Register.bind({});
Style1.args = {
  model:'success',
  label:'Submit'
};

export const Style2 = Register.bind({});
Style2.args = {
  model:'danger',
  label:'Submit'
};

export const Style3 = Register.bind({});
Style3.args = {
  model:'info',
  label:'Submit'
};




