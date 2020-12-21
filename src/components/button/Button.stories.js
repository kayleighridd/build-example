import Button from "./button.handlebars";

const controls = {
  title: "Example/Button",
  argTypes: {
    label: { control: "text" },
    variant: { type: "select", options: ["primary", "secondary"] },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  },
  component: Button,
};

// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
// const Template = ({ primary, label = "button", size = "medium", ...args }) =>
//   `<div class="${[
//     styles.button,
//     styles[`button--${size}`],
//     styles[`button--${primary ? "primary" : "secondary"}`],
//   ].join(" ")}
// ">${label}</div>`;

const Template = ({ ...args }) =>
  Button({
    label: "Button",
    size: "medium",
    ...args,
  });

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};
Primary.parameters = {
  docs: {
    source: {
      code: Template(Primary.args),
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};
Secondary.parameters = {
  docs: {
    source: {
      code: Template(Secondary.args),
    },
  },
};

export default controls;
