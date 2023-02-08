import { createTypography } from './typography';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Typography',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    color: { control: 'color' },
    text: { control: 'text' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' }
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ text, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${text}</div>`;
  return createTypography({ text, ...args });
};

export const BlueLarge = Template.bind({});
BlueLarge.args = {
  text: 'Blue Large bold 24px',
  color: '#00257A',
  fontSize: '24px',
  fontWeight: 'bold'
};
