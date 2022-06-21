import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import TextArea, {ButtonProps} from "./TextArea";

export default {
    title: "Components/TextArea",
    component: TextArea,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

// Create a master template for mapping args to render the TextArea component
const Template: Story<ButtonProps> = (args) => <TextArea {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {label: "Hello Primary 😃", rows: 4};

export const Secondary = Template.bind({});
Secondary.args = {...Primary.args, primary: false, label: "Hello Secondary 😇", rows: 5};

export const Secondary2 = Template.bind({});
Secondary2.args = {...Primary.args, primary: false, label: "Hello Secondary 2 😇 😇", rows: 10};