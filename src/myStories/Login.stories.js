import React from "react";
import LoginStories from "./LoginStories";

export default {
  title: "MyStory/Login",
  Login: LoginStories,
  parameters: {
    layout: "fullscreen"
  }
};

export const Login = (args) => <LoginStories {...args} />;

export const LoginFunction = Login.bind({});
LoginFunction.args = {
  username: 'Ricky',
  password: 'admin'
};

export const Style1 = Login.bind({});
Style1.args = {
  model:'success',
  label:'Submit'
};

export const Style2 = Login.bind({});
Style2.args = {
  model:'danger',
  label:'Submit'
};

export const Style3 = Login.bind({});
Style3.args = {
  model:'info',
  label:'Submit'
};




