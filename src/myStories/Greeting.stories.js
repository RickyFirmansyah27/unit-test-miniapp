import React from "react";
import GreetingStories from "./GreetingStories";

export default {
  title: "MyStory/Greeting",
  Greeting: GreetingStories,
  parameters: {
    layout: "fullscreen"
  }
};

export const Greeting = (args) => <GreetingStories {...args} />;

export const Style1 = Greeting.bind({});
Style1.args = {
  model:'success',
  label:'Submit'
};

export const Style2 = Greeting.bind({});
Style2.args = {
  model:'danger',
  label:'Submit'
};

export const Style3 = Greeting.bind({});
Style3.args = {
  model:'info',
  label:'Submit'
};




