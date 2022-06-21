import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import Button, {ButtonProps} from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

// Create a master template for mapping args to render the TextArea component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {label: "Hello Primary 😃", size: "large"};

export const Secondary = Template.bind({});
Secondary.args = {...Primary.args, primary: false, label: "Hello Secondary 😇"};

export const Secondary2 = Template.bind({});
Secondary2.args = {...Primary.args, primary: false, label: "Hello Secondary 2 😇 😇"};