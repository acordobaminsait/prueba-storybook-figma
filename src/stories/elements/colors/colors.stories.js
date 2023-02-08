import { createColor } from './colors';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Color',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ text, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${text}</div>`;
  return createColor({ text, ...args });
};

export const Blue01 = Template.bind({});
Blue01.args = {
  text: 'Blue 01',
  backgroundColor: '#00257A',
};

export const Blue02 = Template.bind({});
Blue02.args = {
  text: 'Blue 02',
  backgroundColor: '#004AB7',
};

export const Blue03 = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Blue03.args = {
  text: 'Blue 03',
  backgroundColor: '#006ff5',
};
