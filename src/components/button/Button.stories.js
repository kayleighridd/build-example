import Button from "./button.handlebars";
import "./button.css"; // TODO: Use compiled version

const controls = {
  title: "Example/Button",
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  },
  component: Button,
};

// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
const Template = ({ primary, ...args }) =>
  Button({
    label: "Button",
    size: "medium",
    variant: primary ? "primary" : "secondary",
    ...args,
  });

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export default controls;
